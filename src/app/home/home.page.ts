import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // data: any[] = []; //declare as array
  data: any = {}; //declare as object

  constructor(public http: HttpClient) {
    this.getData();
  }

  getData() {
    this.http
      .get<any>('https://jsonplaceholder.typicode.com/todos/50')
      .subscribe(
        (data) => {
          console.log(data);
          this.data = data; //put data into this.data array
        },
        (e) => {
          console.log(e);
        }
      );
  }

  postData() {
    // this.http
    //   .post<any>('https://jsonplaceholder.typicode.com/create_todos', {
    //     title: 'ABCD',
    //     completed: true,
    //     userId: 40,
    //   })
    //   .subscribe(
    //     (data) => {
    //       console.log(data);
    //       this.data = data;
    //     },
    //     (e) => {
    //       console.log(e);
    //     }
    //   );

    // this.http
    //   .put<any>('https://jsonplaceholder.typicode.com/create_todos', {
    //     title: 'ABCD',
    //     completed: true,
    //     userId: 40,
    //   })
    //   .subscribe(
    //     (data) => {
    //       console.log(data);
    //       this.data = data;
    //     },
    //     (e) => {
    //       console.log(e);
    //     }
    //   );

    this.http
      .delete<any>('https://jsonplaceholder.typicode.com/create_todos/1')
      .subscribe(
        (data) => {
          console.log(data);
        },
        (e) => {
          console.log(e);
        }
      );
  }
}
