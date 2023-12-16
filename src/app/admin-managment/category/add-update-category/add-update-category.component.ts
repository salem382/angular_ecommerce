import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/core/http/category.service';
import { MessageComponent } from 'src/app/global/components/message/message.component';

@Component({
  selector: 'app-add-update-category',
  templateUrl: './add-update-category.component.html',
  styleUrls: ['./add-update-category.component.css']
})
export class AddUpdateCategoryComponent {


  myForm:FormGroup;

  constructor (
    private fb:FormBuilder,
    private _CategoryService:CategoryService,
    private _MatDialog:MatDialog,
    private router:Router
    ) {

    this.myForm = this.fb.group({
      name:[''],
      img:['']
    })
  }

  setFileValue(event:any):void {
    const file = event.target.files[0];
    if (file) {
      this.myForm.get('img')?.setValue(file);
    }
  }


  onSubmit():void {
    if(!this.myForm.valid)
      return;
    let formDate = new FormData();
    formDate.append("image", this.myForm.get('img')?.value);
    formDate.append("name", this.myForm.get('name')?.value);

    this._CategoryService.addCategory(formDate).subscribe({
      next:(res)=> {
        this.myForm.reset();
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
        message:"category added successfully"
      },
    }).afterClosed()
  }

}


