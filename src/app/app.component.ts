import { Component } from '@angular/core';
import { NavbarServiceService } from 'navbar-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'navbar';
  data = [];
  constructor(private navservice: NavbarServiceService) {
    this.data = this.navservice.getNavBarData();
    console.log(this.data)

  }
}
