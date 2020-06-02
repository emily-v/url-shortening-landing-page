import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  showNav: boolean = false;
  nav: HTMLElement;

  ngOnInit(): void {
    this.nav = document.querySelector('.nav');
  }

  toggleNav(): void {
    this.showNav = !this.showNav;
    if(this.showNav) {
      this.nav.classList.remove('nav-visiblity');
    } else {
      this.nav.classList.add('nav-visiblity');
    }

  }

}
