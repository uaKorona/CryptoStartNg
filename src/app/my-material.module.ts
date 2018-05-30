import {NgModule} from '@angular/core';
import {MatIconModule, MatPaginatorModule, MatTableModule, MatTabsModule, MatToolbarModule} from '@angular/material';

const importsExports = [
  MatIconModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatTableModule,
  MatTabsModule
];

@NgModule({
  imports: importsExports,
  exports: importsExports,
  declarations: []
})
export class MyMaterialModule {
}
