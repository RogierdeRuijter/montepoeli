import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { DialogDataComponent } from './components/dialog-data/dialog-data.component';
import { DialogOverviewComponent } from './components/dialog-overview/dialog-overview.component';
import { CustomTranslateModule } from '../translate/custom-translate.module';
import { ButtonModule } from '../button/button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameResultComponent } from './components/dialog-data/game-result/game-result.component';
import { FormModule } from '../form/form.module';
import { GridModule } from '../grid/grid.module';
import { TransitionModule } from '../transition/transition.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [DialogDataComponent, DialogOverviewComponent, GameResultComponent],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { hasBackdrop: false },
    },
  ],
  entryComponents: [DialogDataComponent],
  exports: [DialogOverviewComponent, MatDialogModule],
  imports: [
    CommonModule,
    MatDialogModule,
    CustomTranslateModule,
    ButtonModule,
    FormsModule,
    FormModule,
    GridModule,
    TransitionModule,
    MatChipsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
})
export class AddGameModule {}
