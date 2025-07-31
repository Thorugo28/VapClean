import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/components/header/header';
import { ComparisonSection } from "./core/components/comparison-section/comparison-section";
import { VideoCards } from "./shared/components/video-cards/video-cards";
import { OffersSection } from "./core/components/offers-section/offers-section";
import { RatingSectionComponent } from "./core/components/rating-section/rating-section.component";
import { ServicesComponentComponent } from "./core/components/services-component/services-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ComparisonSection, VideoCards, OffersSection, RatingSectionComponent, ServicesComponentComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('vap-clean');

  before = 'assets/images/before.jpg'
  after = 'assets/images/after.jpg'

  tittle_comparison = 'Especialistas em lavagem e higienização de estofados a domicílio no Rio de Janeiro.'
  description = 'Somos a empresa que lava sofá, cadeiras, colchões, tapetes e oferece limpeza profissional completa para todos os tipos de estofados. Atendemos com agilidade, qualidade e garantia de conforto e prevenção contra ácaros, bactérias e problemas respiratórios.'
  highlight = 'Resultado com fragância agradável e proteção contra bactérias'
}
