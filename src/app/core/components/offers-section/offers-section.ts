import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCards } from '../../../shared/components/video-cards/video-cards';


export interface VideoInfo {
  link: string,
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
      link: 'https://wa.me/5521991905944?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20minha%20limpeza%20de%20estofado%20a%20partir%20de%20R%24%3A%20189%2C00.',
      videoId: 'iicr2W15IxM',
      tittle: 'Limpeza a partir de 189',
      description: 'A Vap Clean é a empresa que lava sofá com excelência, oferecendo higienização de sofá e limpeza de estofados a domicílio com qualidade e segurança. Garanta agora sua LIMPEZA DE SOFÁ A PARTIR DE ',
      price: 189.99
    },
    {
      link: 'https://wa.me/5521991905944?text=Ol%C3%A1%2C%20gostaria%20de%20higienizar%20meu%20sof%C3%A1%20e%20colch%C3%A3o%20de%20casal%20por%20R%24%3A%20349%2C00.',
      videoId: 'WVH3i_Btgkc',
      tittle: 'LIMPEZA DE SOFÁ + COLCHÃO DE CASAL POR APENAS R$:349,00!',
      description: ' Aproveite a promoção de lavagem de sofá + limpeza de colchão de casal com a Vap Clean! Somos especialistas em limpeza e higienização de estofados, com atendimento a domicílio, qualidade garantida e serviço profissional. Peça agora sua higienização de sofá e lavagem de colchões com quem entende do assunto!',
      price: 349.00
    },
    {
      link: 'https://wa.me/5521991905944?text=Ol%C3%A1%2C%20gostaria%20de%20higienizar%20meu%20sof%C3%A1%2C%20colch%C3%A3o%20de%20casal%20e%20tapete%20por%20R%24%3A%20549%2C00.',
      videoId: 'aka6zcT3s_Y',
      tittle: 'HIGIENIZAÇÃO DE SOFÁ + COLCHÃO DE CASAL + TAPETE POR R$: 549,00',
      description: 'Garanta agora a lavagem de sofá, limpeza de colchão de casal e lavagem de tapete com a Vap Clean! Somos referência em limpeza e higienização de estofados a domicílio, com atendimento profissional, eficiente e cuidadoso. Peça já sua higienização de sofá e tenha estofados livres de ácaros, sujeiras e maus odores!',
      price: 549.00
    },
    {
      link: 'https://wa.me/5521991905944?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20personalizado%20para%20o%20meu%20estofado!',
      videoId: '3PsMG24KgJk',
      tittle: 'Limpeza profissional de estofados',
      description: 'Tenha seu sofá, colchão, cadeiras e tapetes limpos e higienizados com quem é especialista em lavagem de estofados a domicílio.) A Vap Clean é a empresa que lava sofá com excelência em higienização de estofados e lavagem de colchões. Solicite já seu orçamento e traga mais saúde e conforto para sua casa',
      price: 0.00
    },
    {
      link: 'https://wa.me/5521991905944?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20personalizado%20para%20o%20meu%20estofado!',
      videoId: '8-pwcmM6-5w',
      tittle: 'Limpeza de estofados a domicílio',
      description: 'Com atendimento no conforto do seu lar, Somos a empresa que faz limpeza profissional de estofados com segurança, eficiência e resultados visíveis. Solicite agora sua lavagem de estofados a domicílio!',
      price: 0.00
    },
    {
      link: 'https://wa.me/5521991905944?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20personalizado%20para%20o%20meu%20estofado!',
      videoId: 'gL37S_O1E4s',
      tittle: ' lavagem e higienização premium de estofados:',
      description: 'A Vap Clean oferece limpeza profunda e premuim de sofá, colchão, cadeiras e tapetes, com atendimento rápido e eficiente no conforto da sua casa. Somos especialistas em limpeza de estofados a domicílio, usando técnicas seguras que eliminam ácaros, odores e sujeiras. Agende agora e tenha estofados limpos como novos!',
      price: 0.00
    }
  ]

}
