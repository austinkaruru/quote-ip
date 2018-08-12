import { Component } from '@angular/core';
import {Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  /*quotes = [
    new Quote(1, 'Hello', 'Never'),
    new Quote(2, 'There', 'Give'),
    new Quote(3, 'you', 'Up'),
    new Quote(4, 'very', 'In'),
    new Quote(5, 'clever', 'Life'),
    new Quote(6, 'Guy', '..')
  ];*/
}

