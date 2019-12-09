import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material';
import { DialogDataComponent } from './components/dialog-data/dialog-data.component';
import { DialogOverviewComponent } from './components/dialog-overview/dialog-overview.component';
import { CustomTranslateModule } from '../translate/custom-translate.module';
import { ButtonModule } from '../button/button.module';
import { FormsModule } from '@angular/forms';
import { GameResultComponent } from './components/dialog-data/game-result/game-result.component';

@NgModule({
  declarations: [
    DialogDataComponent,
    DialogOverviewComponent,
    GameResultComponent,
  ],
  providers: [
    { 
      provide: MAT_DIALOG_DEFAULT_OPTIONS, 
      useValue: { hasBackdrop: false } 
    }
  ],
  entryComponents: [
    DialogDataComponent,
  ],
  exports: [
    DialogDataComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    CustomTranslateModule,
    ButtonModule,
    FormsModule
  ]
})
export class AddGameModule { }
