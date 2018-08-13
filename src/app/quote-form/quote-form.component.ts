import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quote-form",
  templateUrl: "./quote-form.component.html",
  styleUrls: ["./quote-form.component.css"]
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote(0, "", "", "", new Date());
  public newname: string;
  public newauthor: string;
  public newquote: string;
  public newdate: Date;
  @Output()
  addQuote = new EventEmitter<Quote>();

  submitQuote() {
    const newQuote = new Quote(
      0,
      this.newname,
      this.newquote,
      this.newauthor,
      this.newdate
    );
    this.addQuote.emit(newQuote);
  }

  constructor() {}

  ngOnInit() {}
}
