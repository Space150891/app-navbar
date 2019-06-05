import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from 'navbar-service'

@Component({
  selector: 'nav-navbar-create',
  template: `

  <div class="container">

  <!-- Static navbar -->
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Project name</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul *ngFor="let link of navData" class="nav navbar-nav">
          <li class="active"><a href="{{link.link}}">{{link.name}}</a></li>
          
          
          
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="active"><a href="./">Default <span class="sr-only">(current)</span></a></li>
          <li><a href="../navbar-static-top/">Static top</a></li>
          <li><a href="../navbar-fixed-top/">Fixed top</a></li>
        </ul>
      </div><!--/.nav-collapse -->
    </div><!--/.container-fluid -->
  </nav>

  <!-- Main component for a primary marketing message or call to action -->
  <div class="jumbotron">
    <h1>Navbar example</h1>
    <p>This example is a quick exercise to illustrate how the default, static navbar and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
    <p>
      <a class="btn btn-lg btn-primary" href="../../components/#navbar" role="button">View navbar docs »</a>
    </p>
  </div>

</div>
  
  `,
  styles: []
})
export class NavbarCreateComponent implements OnInit {
  navData = [];
  constructor(private navservice: NavbarServiceService) { }

  ngOnInit() {
    this.navData = this.navservice.getNavBarData()
  }

}
