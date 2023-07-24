import { Interpolation } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  //Different way of writing selectors in component.ts and including them in angular's html file
  //selector: 'app-root' =>  in html include as <app-root></app-root>
  //selector: '[app-root]' =>  in html include as <div app></div>
  //selector: '.app-root' =>  in html include as <div class="app"></div>
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //string Interpolation
  title = 'angular-start';
}
