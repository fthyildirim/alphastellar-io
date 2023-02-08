import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent  {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {

  }

  model: any = {
    title: '',
    description: '',
    address: '',
  };


  submitForm() {
    this.router.navigate(['/', 'flex', 'page-one'], { relativeTo: this.route })
  }
 
  get isResetDisable() {
    return !this.model.address && !this.model.title && !this.model.description;
  }
}
