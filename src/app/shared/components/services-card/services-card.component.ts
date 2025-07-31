import { Component, input } from '@angular/core';

@Component({
  selector: 'app-services-card',
  imports: [],
  templateUrl: './services-card.component.html',
  styleUrl: './services-card.component.css'
})
export class ServicesCardComponent {

  icon = input<string>();
  tittle = input<string>();
  text = input<string>();

}
