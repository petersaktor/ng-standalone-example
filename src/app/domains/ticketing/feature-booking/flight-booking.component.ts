import { Component, inject } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { LoggerService } from "../../../shared/util-logger";

@Component({
    standalone: true,
    selector: 'app-flight-booking',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    imports: [
      RouterOutlet,
      RouterLink,
    ],
    templateUrl: './flight-booking.component.html'
  })
  export class FlightBookingComponent {
    logger = inject(LoggerService);
  
    constructor() {
      this.logger.info('booking', 'Hello from Booking');
    }
  }
  