import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatSnackBarModule,
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
  MatButtonModule,
  MatSnackBarModule,
  MatMenuModule,
  MatDialogModule,
  MatProgressBarModule,
  MatGridListModule
];

@NgModule({
  imports: importsExports,
  exports: importsExports,
  declarations: []
})
export class MyMaterialModule {
}
