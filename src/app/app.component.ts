import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Form';

  constructor() { }

  ngOnInit() {

    const sqnc = new Observable(countOnetoTen);



    sqnc.subscribe(
      val => { console.log(val) },
      error => { console.log("error") },
      () => { console.log("Completed") }
    );

    function countOnetoTen(observer) {

      setTimeout(() => {   
        observer.next(1000);
      }, 300);

      for (var i = 1; i <= 10; i++) {
        // notification 
        observer.next(i);
      }
      observer.complete();
      return { unsubscribe() { } };
    }
  }



}
