import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  showNav: boolean = false;

  ngOnInit(): void {

  }

  toggleNav(): void {
    this.showNav = !this.showNav;
    if(this.showNav) {

    }

  }

}
