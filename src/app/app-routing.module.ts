import { LayoutGridComponent } from './layouts/layout-grid/layout-grid/layout-grid.component';
import { LayoutFlexComponent } from './layouts/layout-flex/layout-flex/layout-flex.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTwoComponent } from './pages/page-two/page-two.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'flex',
    pathMatch: 'full',
  },
  {
    path: 'flex',
    component: LayoutFlexComponent,
    children: [
      {
        path: '',
        redirectTo: 'page-one',
        pathMatch: 'full',
      },
      {
        path: 'page-one',
        component: PageOneComponent,
      },
      {
        path: 'page-two',
        component: PageTwoComponent,
      },
    ]
  },
  {
    path: 'grid',
    component: LayoutGridComponent,
    children: [
      {
        path: 'page-one',
        component: PageOneComponent,
      },
      {
        path: 'page-two',
        component: PageTwoComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
