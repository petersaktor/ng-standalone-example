import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckinService } from '../data';
import { LoggerService } from "../../../shared/util-logger";

@Component({
  selector: 'app-feature-manage',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './feature-manage.component.html',
  styleUrl: './feature-manage.component.scss'
})
export class FeatureManageComponent {
  service = inject(CheckinService);
  logger = inject(LoggerService);

  ticketNumber = '';

  checkin() {
    this.service.checkin(this.ticketNumber);
  }
}
