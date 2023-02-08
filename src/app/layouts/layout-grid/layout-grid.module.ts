import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutGridComponent } from './layout-grid/layout-grid.component';



@NgModule({
  declarations: [
    LayoutGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class LayoutGridModule { }
