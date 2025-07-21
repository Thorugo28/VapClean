import { Component, EventEmitter, input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {

  tittle = input<string>();

  @Output() click = new EventEmitter<void>();

  onClick(){
    this.click.emit();
  }

}
