import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCards } from '../../../shared/components/video-cards/video-cards';


export interface VideoInfo {
  videoUrl: string,
  tittle: string,
  description: string,
  price: number;
}

@Component({
  selector: 'app-offers-section',
  imports: [VideoCards, CommonModule],
  templateUrl: './offers-section.html',
  styleUrl: './offers-section.css'
})
export class OffersSection {

  listaDeVideo: VideoInfo[] = [
    {
      videoUrl: 'assets/videos/20_off.mov',
      tittle: 'Limpeza a partir de 189',
      description: 'A VapClean é uma empresa pipipipopopo',
      price: 189.99
    }
  ]

}
