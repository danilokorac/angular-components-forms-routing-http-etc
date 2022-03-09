import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  /*template: `
    <h1>Angular router app</h1>

    <nav>
      <ul>
        <li><a routerLink="/first-component">First Component</a></li>
        <li><a routerLink="/second-component">Second Component</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,*/
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    
  }
}
