import { AsyncPipe, JsonPipe, NgForOf, NgIf } from "@angular/common";
import { Component, inject } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Store } from "@ngrx/store";
import { take } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { BookingSlice, delayFlight, loadFlights, selectFlights } from "../../data";
import { CityValidator } from "../../../../shared/util-common/city.validator";
import { FlightCardComponent } from "../../ui-common";

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    AsyncPipe,
    JsonPipe,
    FormsModule,
    FlightCardComponent,
    CityValidator,
  ],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.scss'
})
export class FlightSearchComponent {
  private store = inject<Store<BookingSlice>>(Store);

  from = 'Hamburg'; // in Germany
  to = 'Graz'; // in Austria
  urgent = false;

  flights$ = this.store.select(selectFlights);

  basket: Record<number, boolean> = {
    3: true,
    5: true
  };

  search(): void {
    if (!this.from || !this.to) return;

    this.store.dispatch(loadFlights({
      from: this.from,
      to: this.to
    }));
  }

  delay(): void {
    this.flights$.pipe(take(1)).subscribe(flights => {
      const id = flights[0].id;
      this.store.dispatch(delayFlight({id}));
    });
  }  
}
