import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/core/http/category.service';
import { MessageComponent } from 'src/app/global/components/message/message.component';
import { Category } from 'src/app/global/models/category.mode';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})


export class CategoriesComponent implements OnInit {

  Categories:Category[] = [];

  constructor (
    private _CategoryService:CategoryService,
    private _MatDialog:MatDialog,
    ) {
  }
  
  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories ():void {

    this._CategoryService.getCategories().subscribe({

      next:(res)=> {

        this.Categories = res.result;
        console.log(res.result)
      },
      error:(err)=> {
        console.log(err)
      }
    })
  }

  handleDelete(id:string):void {
    this._CategoryService.deleteCategory(id).subscribe({
      next:(res)=> {
        console.log(res);
        this.getAllCategories();
        this.openDialog();
      },
      error:(err)=> {
        console.log(err)
      }
    })
  }

  openDialog() {
    this._MatDialog.open(MessageComponent, {
      data: {
        message:"success deleted"
      },
    }).afterClosed()
    .subscribe({
      next: (res) => {
       
      },
      error: (err) => {},
    });
  }
  
}

