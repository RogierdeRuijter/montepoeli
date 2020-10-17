import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonIconComponent } from './components/button-icon/button-icon.component';
import { IconModule } from '../icon/icon.module';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './components/button/button.component';
import { ButtonRowComponent } from './components/button-row/button-row.component';
import { CustomTranslateModule } from '../translate/custom-translate.module';
import { GridModule } from '../grid/grid.module';
import { ButtonIconActiveStateComponent } from './components/button-icon-active-state/button-icon-active-state.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonNoElevationComponent } from './components/button-no-elevation/button-no-elevation.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonRowComponent,
    ButtonIconComponent,
    ButtonIconActiveStateComponent,
    ButtonNoElevationComponent,
  ],
  exports: [
    ButtonComponent,
    ButtonRowComponent,
    ButtonIconComponent,
    ButtonIconActiveStateComponent,
    ButtonNoElevationComponent,
  ],
  imports: [CommonModule, IconModule, MatButtonModule, CustomTranslateModule, GridModule, MatDialogModule],
})
export class ButtonModule {}
