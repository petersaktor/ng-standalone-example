import { Component, inject } from '@angular/core';
import { LoggerService } from "../../shared/util-logger";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  logger = inject(LoggerService);

  constructor() {
    this.logger.debug('home', 'My Debug Message');
    this.logger.info('home', 'My Info Message');  
    this.logger.error('home', 'My Error Message');    
  }
}
