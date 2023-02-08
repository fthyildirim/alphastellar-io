import { ThemeService } from './services/theme.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutFlexModule } from './layouts/layout-flex/layout-flex.module';
import { LayoutGridModule } from './layouts/layout-grid/layout-grid.module';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutFlexModule,
    LayoutGridModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
