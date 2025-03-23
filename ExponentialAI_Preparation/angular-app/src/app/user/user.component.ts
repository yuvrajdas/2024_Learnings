import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

export interface IUser {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  userData: Array<IUser> = [];
  filteredUserData: Array<IUser> = [];
  dataToBeDisplayed: Array<IUser> = [];
  rowPerPage: number = 5;
  pageIdx = 0;
  time: string = ''
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getUpdatedtime();
    setInterval(() => {
      this.getUpdatedtime();

    }, 1000);
    this.getUserData();
  }

  getUpdatedtime() {
    let now = new Date();
    this.time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
  }

  constructPagination() {
    let startIdx = this.pageIdx * this.rowPerPage;
    let endIdx = startIdx + this.rowPerPage

    this.dataToBeDisplayed = this.userData.slice(startIdx, endIdx);
    this.filteredUserData = this.dataToBeDisplayed;
  }
  getUserData() {
    this.http.get<Array<IUser>>('https://jsonplaceholder.typicode.com/posts').subscribe((res) => {
      this.userData = res;
      this.constructPagination()
    })
  }
  searchRecords(event: any) {
    let searchKey = (event?.target?.value ?? '').toLowerCase();
    this.filteredUserData = this.dataToBeDisplayed.filter((ele) => ele.title.toLowerCase().includes(searchKey))
  }

  editUser(user: IUser) {
    let body = {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }

    this.http.put<IUser>('https://jsonplaceholder.typicode.com/posts/1', { body }, { observe: 'response' }).subscribe((res) => {
      if (res.status == 200) {
        console.log(res);
        this.getUserData();

      }
    })
  }

  deletetUser(user: IUser) {

    this.http.delete(`https://jsonplaceholder.typicode.com/posts/${user.id}`, { observe: 'response' }).subscribe((res) => {
      if (res.status == 200) {
        alert('Record Deleted successfull')
      }
    });
  }


  selectPageSize(event: any) {
    this.rowPerPage = parseInt(event.target.value)
    this.pageIdx = 0;
    this.constructPagination()
  }

  goToNextPage() {
    let totalNoOfPages = Math.ceil(this.userData.length / this.rowPerPage);

    if (this.pageIdx < totalNoOfPages - 1) {
      this.pageIdx++;
      this.constructPagination();
    }

  }

  goToPreviousPage() {
    if (this.pageIdx > 0) {
      this.pageIdx--;
      this.constructPagination();
    }
  }
}
