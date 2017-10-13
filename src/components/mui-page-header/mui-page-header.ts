import { Component } from '@angular/core';

/**
 * Generated class for the MuiPageHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mui-page-header',
  templateUrl: 'mui-page-header.html'
})
export class MuiPageHeaderComponent {

  title: string;

  constructor() {
    console.log('Hello MuiPageHeaderComponent Component');
    this.title = 'Hello World';
  }

}
