import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'app-lazy',
  standalone: true,
  imports: [CommonModule],
  //template: `@if(visible){<h2>Lazy Component</h2>}`
  template: `<h2>Lazy Component</h2>`
})
export class LazyComponent {
    title = 'Standalone Demo';
    visible = true;
 }