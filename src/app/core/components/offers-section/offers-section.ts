import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCards } from '../../../shared/components/video-cards/video-cards';


export interface VideoInfo {
  videoId: string,
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
      videoId: '5WYyiQ6F-J0',
      tittle: 'Limpeza a partir de 189',
      description: 'A Vap Clean é a empresa que lava sofá com excelência, oferecendo higienização de sofá e limpeza de estofados a domicílio com qualidade e segurança. Garanta agora sua LIMPEZA DE SOFÁ A PARTIR DE ',
      price: 189.99
    },
    {
      videoId: '54BQ9RyyWP8',
      tittle: 'LIMPEZA DE SOFÁ + COLCHÃO DE CASAL POR APENAS R$:349,00!',
      description: ' Aproveite a promoção de lavagem de sofá + limpeza de colchão de casal com a Vap Clean! Somos especialistas em limpeza e higienização de estofados, com atendimento a domicílio, qualidade garantida e serviço profissional. Peça agora sua higienização de sofá e lavagem de colchões com quem entende do assunto!',
      price: 349.00
    },
    {
      videoId: 'ULiF1lEANxA',
      tittle: 'HIGIENIZAÇÃO DE SOFÁ + COLCHÃO DE CASAL + TAPETE POR R$: 549,00',
      description: 'Garanta agora a lavagem de sofá, limpeza de colchão de casal e lavagem de tapete com a Vap Clean! Somos referência em limpeza e higienização de estofados a domicílio, com atendimento profissional, eficiente e cuidadoso. Peça já sua higienização de sofá e tenha estofados livres de ácaros, sujeiras e maus odores!',
      price: 549.00
    },
    {
      videoId: '2uavrA_lJTQ',
      tittle: 'Limpeza profissional de estofados',
      description: 'Tenha seu sofá, colchão, cadeiras e tapetes limpos e higienizados com quem é especialista em lavagem de estofados a domicílio.) A Vap Clean é a empresa que lava sofá com excelência em higienização de estofados e lavagem de colchões. Solicite já seu orçamento e traga mais saúde e conforto para sua casa',
      price: 0.00
    },
    {
      videoId: 'EdU0fp3alo8',
      tittle: 'Limpeza de estofados a domicílio',
      description: 'Com atendimento no conforto do seu lar, Somos a empresa que faz limpeza profissional de estofados com segurança, eficiência e resultados visíveis. Solicite agora sua lavagem de estofados a domicílio!',
      price: 0.00
    },
    {
      videoId: 'lavagem e higienização premium de estofados:',
      tittle: ' lavagem e higienização premium de estofados:',
      description: 'A Vap Clean oferece limpeza profunda e premuim de sofá, colchão, cadeiras e tapetes, com atendimento rápido e eficiente no conforto da sua casa. Somos especialistas em limpeza de estofados a domicílio, usando técnicas seguras que eliminam ácaros, odores e sujeiras. Agende agora e tenha estofados limpos como novos!',
      price: 0.00
    }
  ]

}
