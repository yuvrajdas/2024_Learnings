import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  usersData:Array<any> = [];
  dataToBeRendered:Array<any> = [];
  rowPerPage:number = 10;
  pageIndex:number = 0;
  totalNoOfPages:number = 0;

  constructor(private http : HttpClient){}

  ngOnInit(){
    this.getUsersData();
  }

  getUsersData(){
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe((res)=>{
      this.usersData = res;
      this.totalNoOfPages = Math.ceil(this.usersData.length/this.rowPerPage);
      this.renderData();
    })


  }

  renderData(){
    let start = this.pageIndex*this.rowPerPage;
    let end = start+this.rowPerPage;
    this.dataToBeRendered = this.usersData.slice(start, end);
  }

  nextPage(){
    if(this.pageIndex<this.totalNoOfPages-1){
      this.pageIndex++;
      this.renderData();
    }
  }

  prevPage(){
    if(this.pageIndex>0){
      this.pageIndex--;
      this.renderData();
    }
  }

  changePageSize(event:any){
    this.rowPerPage = parseInt(event.target.value);
    this.pageIndex = 0;
    this.renderData();
  }
}
