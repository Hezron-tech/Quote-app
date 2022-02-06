export class Quote {
    showAuthor: boolean;
    constructor(public id: number,public Author: string,public genre: string,public name:string,public completeDate: Date){
      this.showAuthor=false;

}
}
