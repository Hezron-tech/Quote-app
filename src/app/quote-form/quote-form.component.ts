import { Quote } from './../quote';
import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote(0,"","","",new Date());
  @Output() addQuote = new EventEmitter<Quote>();
  Quote: any;
  quotes: any;

  submitQuote(){
this.addQuote.emit(this.newQuote);
  }

  // displayInfo(index:number){
  // this.Quote[index].showInfo=!this.quotes[index].showInfo;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
