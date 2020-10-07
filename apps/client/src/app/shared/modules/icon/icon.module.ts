import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './components/icon/icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, MatIconModule],
  declarations: [IconComponent],
  exports: [IconComponent],
})
export class IconModule {}
