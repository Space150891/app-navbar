import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarServiceService {
  navbarData = [
    { name: "Home", link: "https://www.google.com/" },
    { name: "About", link: "https://www.netflix.com/" },
    { name: "Contact", link: "https://www.instagram.com/" }
  ]

  constructor() { }
  getNavBarData() {
    return this.navbarData;
  }
}
