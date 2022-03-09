import { Component, OnInit, OnDestroy, Renderer2, ElementRef } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  /*template: `
    <app-item-details (deleteRequest)="deleteItem($event)"></app-item-details>
  `,
  template: `
    <input #phone placeholder="phone" />

    <button (click)="callPhone(phone.value)">Call</button>
  `,
  template:`
    <input #ref1 type="text" [(ngModel)]="firstExample"/>
    <ng-template [ngIf]="true">
      <span>{{ref1.value}}</span>
    </ng-template>
  `,
  template: `
      <div 
      [ngClass]="currentClasses" 
      [ngStyle]="currentStyle">
      Example</div>
  `,
  template:`
      <label for="example">{{name}}</label>
      <input [(ngModel)]="name" id="example"/>
  `,
  template: `
      <p [appHighlight]="'red'">Test</p>
  `,*/
  template:`
    <div *ngIf="isActive">Active</div> <br>
    <div *ngFor="let item of items; let i = index">{{i}} - {{item.name}}</div>
    <br>
    <div [ngSwitch]="names.nam">
      <div *ngSwitchCase="'Dany'">Hi mom</div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})

/*export class AppComponent implements OnInit, OnDestroy {
  intervalSub;

  ngOnInit() {
    this.intervalSub = setInterval(() => {
      console.log('Hello from ngOnInit!');
    });
  }

  ngOnDestroy() {
    if(this.intervalSub) {
      clearInterval(this.intervalSub);
    }
  }
}*/

export class AppComponent implements OnInit {
  constructor(private logService: LogService,
    private renderer: Renderer2,
    private host: ElementRef) {}
  //title = "Hello World!"
  /* getMin(a, b) {
    if(a < b)
      return a;
    else if(a > b)
      return b;
    else
      return (console.log('Numbers are equal'));
  } 

  showText = false;

  toggleText(event): void {
    this.showText = !this.showText;
    console.log(event);
  }

  todayDate = new Date();

  itemImageUrl = '../assets'

  onSave() {
    console.log('click on save');
 
  deleteItem(item) {
    console.log(item);
  }
  fontSizepx = 16;

  callPhone(phone: string) {
    console.log(phone);
  }

  firstExample = '' ; 

  isSpecial = true;
  currentClasses = {};
  currentStyle = {};

  ngOnInit() {
    this.setCurrentClasses();
    this.setCurrentStyle();
  }

  setCurrentClasses(){
    this.currentClasses = {
      savable: true,
      modified: false,
      special: true
    }
  }

  setCurrentStyle() {
    this.currentStyle = {
      'font-style': 'italic',
      'font-weight': 'bold'
    }
  }
  name='bob'*/
  isActive = true;
  items = [
    {name: 'Boba'},
    {name: 'Bobaa'},
    {name: 'Bobaa'}
  ]
  names = {nam: 'Dany'}
  ngOnInit() {
    this.logService.logMessage('HelloWorld!');
    this.renderer.setStyle(this.host.nativeElement, 'color', 'red')
  }

}