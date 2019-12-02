import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatNativeDateModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';

const materialList = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatExpansionModule,
  MatInputModule,
  MatCardModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatDividerModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatDialogModule,
];

@NgModule({
  imports: materialList,
  exports: materialList,
})
export class MaterialModule {
}
