import { Quote } from './../quote';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  
  numberOfLike: number =0;
  numberOfDislike: number=0;

@Input() quote:Quote | undefined;
@Output() isComplete= new EventEmitter<boolean>();

quoteComplete(complete:boolean){
  this.isComplete.emit(complete);
}

likeButtonClick(){
this.numberOfLike++;
}
dislikeButtonClick(){
  this.numberOfDislike--;

}


  constructor() { }

  ngOnInit(): void {
  }

}
