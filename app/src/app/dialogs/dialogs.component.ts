import { ApiService } from './../api/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogsComponent>,@Inject(MAT_DIALOG_DATA) public data:any,public service:ApiService){ }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close('close');
  }
  
  async confirm(){
    this.dialogRef.close(true)
  }
}
