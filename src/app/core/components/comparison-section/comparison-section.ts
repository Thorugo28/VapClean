import { Component, input, OnDestroy, OnInit, NgZone, signal } from '@angular/core';
import { Button } from "../../../shared/components/button/button";

@Component({
  selector: 'app-comparison-section',
  imports: [Button],
  templateUrl: './comparison-section.html',
  styleUrl: './comparison-section.css'
})
export class ComparisonSection implements OnInit, OnDestroy {

  beforeImage = input<string>();
  afterImage = input<string>();

  tittle = input<string>();
  description = input<string>();
  highlight = input<string>();
  buttonText = input<string>('Solicite seu Orçamento em 2 minutos')

  public isShowingAfter = signal<boolean>(false);
  private intervalId: any;

  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.startAutoPlay();
  }
  ngOnDestroy() {
    this.stopAutoPlay();
  }

  private startAutoPlay(){
    this.zone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.zone.run(() => {
            console.log('Trocando imagem via NgZone', !this.isShowingAfter)
            this.isShowingAfter.update(currentValue => !currentValue);
        })
    }, 4000)
    })

  }

  private stopAutoPlay(){
    if(this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
