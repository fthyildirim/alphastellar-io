import { MenuItem } from './../../model/menu-item.model';
import { ThemeService } from './../../services/theme.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent  {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private themeService: ThemeService,
  ) {

  }

  model: any = {
    title: '',
    description: '',
    address: '',
  };


  submitForm() {
    this.router.navigate(['/', 'grid', 'page-two'], { relativeTo: this.route })
  }

  get isResetDisable() {
    return !this.model.address && !this.model.title && !this.model.description;
  }

  get menuItemList() {
    return this.themeService.themeList;
  }

  changeTheme(menuItem: MenuItem) {
    this.themeService.changeTheme(menuItem);
    
  }
  
  get selectedMenuItem() {
    return this.themeService.selectedMenuItem$.value;
  }
}
