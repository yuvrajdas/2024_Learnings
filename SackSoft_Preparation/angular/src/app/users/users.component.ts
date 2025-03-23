import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  constructor(private http:HttpClient){}
  usersData:Array<any> = [];
  filteredUserData:Array<any> = [];
  ngOnInit(){
    this.getData();
  }

  getData(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      console.log(res);
      this.filteredUserData = res;
      this.usersData = res;
    })
  }

  search(event:any){
    let searchKey = event.target.value.toString().toLowerCase();

    this.filteredUserData = this.usersData.filter((ele)=>{
      return ele.name.toLowerCase().includes(searchKey);
    })
    console.log(this.filteredUserData);

  }

  isAscending = true;
  sortColumn(){
    this.isAscending = !this.isAscending;

    this.filteredUserData.sort((a, b)=> {
      if(a.name>b.name){
        return  this.isAscending ? 1 : -1;
      }else if(a.name<b.name) {
        return this.isAscending ? -1 : 1;
      }else{
        return 0;
      }
    })
  }
}
