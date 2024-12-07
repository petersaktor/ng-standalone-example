import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-flight-edit-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './flight-edit.component.html',
  styleUrl: './flight-edit.component.scss'
})
export class FlightEditComponent implements OnInit {
  
  id: string | undefined;
  showDetails: string | undefined;
  showWarning = false;

  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });
  }
}
