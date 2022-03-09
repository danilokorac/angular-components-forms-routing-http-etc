import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
  //styles: [`h2 {color: red;}`]
})
export class ChildComponent implements OnInit {
  @Input()  childMessage!: string;
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }
  message = 'message from child'
  ngOnInit(): void {
  }

  /*sendMessage() {
    this.messageEvent.emit('Hello from child');
  }*/

}
