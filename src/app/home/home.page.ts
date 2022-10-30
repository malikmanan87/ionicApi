import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any[] = [];

  constructor(public http: HttpClient) {
    this.getData();
  }

  getData() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/todos').subscribe(
      (data) => {
        console.log(data);
        this.data = data; //put data into this.data array
      },
      (e) => {
        console.log(e);
      }
    );
  }
}
