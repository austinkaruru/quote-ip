import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'Quotes';
  quotes = [
    /*new Quote(1, 'Hello', 'Never', new Date(2010, 3, 14)),
    new Quote(2, 'There', 'Give', new Date(2012, 6, 9) ),
    new Quote(3, 'you', 'Up', new Date(2017, 0, 18)),
    new Quote(4, 'very', 'In', new Date(2014, 2, 14)),
    new Quote(5, 'stupid', 'Life', new Date(2015, 2, 14)),
    new Quote(6, 'Guy', '..', new Date(2017, 3, 14)),*/

  ];

  deleteQuote(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`);

      if (toDelete) {this.quotes.splice(index, 1);
    }
    }
  }
   toogleDetails(index) {
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
    constructor() {}
    ngOnInit() {

  }
  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate );
    this.quotes.push(quote);
  }

}
