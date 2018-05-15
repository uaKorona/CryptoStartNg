import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule, MatPaginatorModule, MatTableModule, MatToolbarModule} from '@angular/material';

const importsExports = [
  MatIconModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatTableModule
];

@NgModule({
  imports: importsExports,
  exports: importsExports,
  declarations: []
})
export class MyMaterialModule {
}
