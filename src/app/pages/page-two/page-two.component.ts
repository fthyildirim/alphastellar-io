import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'src/app/model/menu-item.model';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent  {

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
    this.router.navigate(['/', 'flex', 'page-two'], { relativeTo: this.route })
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
