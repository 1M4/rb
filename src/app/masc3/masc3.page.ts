import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-masc3',
  templateUrl: 'masc3.page.html',
  styleUrls: ['masc3.page.scss']
})
export class Masc3Page {

  constructor(private router: Router) { }

  goToEstatal(title: string, id: number) {
    const navigationExtras: NavigationExtras = {
      state: {
        title: title,
        id: id
      }
    };
    this.router.navigate(['estatal'], navigationExtras);
  }
}
