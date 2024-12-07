import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule    
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
      map(result => result.matches),
      shareReplay()
  );

  constructor(@Inject(BreakpointObserver) private breakpointObserver: BreakpointObserver) {}
}
