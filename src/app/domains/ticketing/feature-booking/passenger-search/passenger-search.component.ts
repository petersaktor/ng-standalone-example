import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe, NgFor } from "@angular/common";
import { Passenger } from '../../data';

@Component({
  selector: 'app-passenger-search',
  standalone: true,
  imports: [
    //JsonPipe,
    NgFor
  ],
  templateUrl: './passenger-search.component.html',
  styleUrl: './passenger-search.component.scss'
})
export class PassengerSearchComponent {
  
  private http = inject(HttpClient);
  passengers: Passenger[] = [];

  constructor() {
    const url = 'https://demo.angulararchitects.io/api/passenger';
    this.http.get<Passenger[]>('url').subscribe({
      next: result => {
        this.passengers = result;
      },
      error: error => {
        console.error(error);
      }
    })
    /*this.http.get<Passenger[]>('url').subscribe(result => {
      this.passengers = result;
    }, error => console.error(error));*/
  }
}
