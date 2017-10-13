import { Component } from '@angular/core';

/**
 * Generated class for the OrderDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'order-detail',
  templateUrl: 'order-detail.html'
})
export class OrderDetailComponent {

  text: string;

  constructor() {
    console.log('Hello OrderDetailComponent Component');
    this.text = 'Hello World';
  }

}
