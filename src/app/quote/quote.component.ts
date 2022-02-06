import { Quote } from './../quote';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] =[
      {id:1,Author:'Hezzy',genre:'love',name:'bean'},
      {id:1,Author:'Hezzy',genre:'love',name:'bean'},
      {id:1,Author:'Hezzy',genre:'love',name:'bean'}


  ];

  constructor() { }

  ngOnInit(): void {
  }

}
