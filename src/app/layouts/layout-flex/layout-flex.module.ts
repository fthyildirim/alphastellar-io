import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutFlexComponent } from './layout-flex/layout-flex.component';

@NgModule({
  declarations: [
    LayoutFlexComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class LayoutFlexModule { }
