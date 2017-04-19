import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="subtract()">-</button>
    {{counterValue}}
    <button (click)="add()">+</button>
  `,
  styles: []
})
export class CounterComponent {
  counterValue : number;
  _counter : number;
  @Output() counterChange = new EventEmitter();
  constructor() { 
    this.counterValue = 0;   
  } 
  @Input() set counter(counter : number){
    console.log("Counter is: " +counter);
    this._counter = counter;
    this.counterValue = this._counter;
  }; 
  subtract() {
    this.counterValue--;
    this.counterChange.emit(this.counterValue); 
  }
  add() {
    this.counterValue++;
    this.counterChange.emit(this.counterValue); 
  }
}
