import { Quote } from './../quote';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] =[
      new Quote(1,'Carol Burnett','love','Nothing is impossible. The word itself says ‘I’m possible!’”',newDate(1990,3,14)),
      new Quote( 2,'Audrey Hepburn','Coding','It is a clear and straightforward message that don’t think negatively',newDate(1990,3,14)),
      new Quote(3,'Michael Altshuler','Time','The bad news is time flies. The good news is you’re the pilot.',newDate(1990,3,14))
 

  ];

  toggleDetails(index:any){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  
  }

  completeQuote(isComplete:any, index:any){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
