import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  text: string;

  constructor( @Inject(MAT_DIALOG_DATA) data: {text: string}) {
    this.text = data.text
   }

  ngOnInit(): void {
    console.log(this.text)
  }

}
