import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


interface DialogData {
  message: string;
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  message:string = "";
  constructor (public dialogRef: MatDialogRef<MessageComponent>,
    
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ){
      this.message = data.message
    }

  onClose(): void {
    this.dialogRef.close();
  }
}
