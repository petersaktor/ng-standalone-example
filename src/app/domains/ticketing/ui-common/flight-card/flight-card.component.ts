import { CommonModule } from "@angular/common";
import { Component, ElementRef, EventEmitter, Input, NgZone, Output, inject } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CityPipe } from "../../../../shared/util-common";
import { Flight, initFlight } from "../../data";

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CityPipe],
  templateUrl: './flight-card.component.html',
  styleUrl: './flight-card.component.scss'
})
export class FlightCardComponent {
  private element = inject(ElementRef);
  private zone = inject(NgZone);

  @Input() item: Flight = initFlight;
  @Input() selected: boolean | undefined;
  @Output() selectedChange = new EventEmitter<boolean>();
  @Input() showEditButton = true;

  select() {
    this.selected = true;
    this.selectedChange.next(true);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(false);
  }

  blink() {
    // Dirty Hack used to visualize the change detector
    this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';

    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.element.nativeElement.firstChild.style.backgroundColor = 'white';
      }, 1000);
    });

    return null;
  }
}
