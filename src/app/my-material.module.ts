import {NgModule} from '@angular/core';
import {
  MatCardModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatPaginatorModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

const importsExports = [
  MatIconModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatTableModule,
  MatTabsModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,

];

@NgModule({
  imports: importsExports,
  exports: importsExports,
  declarations: []
})
export class MyMaterialModule {
}
