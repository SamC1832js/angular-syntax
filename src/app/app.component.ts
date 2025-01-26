import { Component } from '@angular/core';

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-syntax';
  onClickMethod(value: any) {
    console.log(value);
  }

  username: string = 'aaa';
  phone: string = '123456';
  isActive: boolean = false;
  toggleactive() {
    if (this.isActive == false) {
      this.isActive = true;
      console.log('true');
    } else {
      this.isActive = false;
      console.log('false');
    }
  }

  navLinks: Nav[] = [
    { link: '/', name: 'Home', exact: true },
    { link: '/badroute', name: 'Bad Route', exact: true },
  ];
}
