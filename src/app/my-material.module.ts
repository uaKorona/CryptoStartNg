import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    MatTableModule
  ]  ,
  declarations: []
})
export class MyMaterialModule { }
