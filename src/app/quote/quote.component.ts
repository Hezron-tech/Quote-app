import { Quote } from './../quote';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] =[
      new Quote(1,'Hezzy','love','bean'),
      new Quote( 2,'Kiprop','war','hey'),
      new Quote(3,'ruth','coding','python')
 

  ];

  toggleDetails(index:any){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  
  }
  constructor() { }

  ngOnInit(): void {
  }

}
