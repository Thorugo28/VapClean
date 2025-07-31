import { Component } from '@angular/core';
import { ServicesCardComponent } from "../../../shared/components/services-card/services-card.component";
import { CommonModule } from '@angular/common';

  export interface Services {
      icon: string,
      tittle: string,
      text: string
  }

@Component({
  selector: 'app-services-component',
  imports: [ServicesCardComponent, CommonModule],
  templateUrl: './services-component.component.html',
  styleUrl: './services-component.component.css'
})
export class ServicesComponentComponent {

    serviceList: Services[] = [
      {
        icon: 'bi bi-house-door', tittle: 'Limpeza de Estofados', text:'Somos uma empresa que lava sofá com excelência, oferecendo limpeza profissional de estofados para sofás, poltronas, cadeiras, puffs e mais. Realizamos lavagem de estofados completa, removendo manchas difíceis, odores e sujeiras profundas. Atendemos com limpeza de estofados a domicílio, utilizando produtos de qualidade e tecnologia de ponta. Ideal para quem busca limpeza de sofá, lavagem de sofá ou higienização de estofados eficiente e segura.'
      },
      {
        icon: 'bi bi-star', tittle: 'Higienização Profunda de Estofados', text:'Nosso serviço de higienização de sofá é ideal para quem busca um ambiente mais saudável. Realizamos a higienização profunda de estofados, eliminando ácaros, fungos, bactérias e odores com segurança. Somos uma empresa que lava sofá especializada em lavagem de sofás com foco em saúde e bem-estar. Atendimento com limpeza de estofados a domicílio, perfeito para quem sofre com alergias ou deseja mais qualidade de vida com uma lavagem de estofados profunda e eficaz.'
      },
      {
        icon: 'bi bi-shield', tittle: 'Limpeza de Cadeiras e Poltronas', text:'Nosso serviço de higienização de sofá é ideal para quem busca um ambiente mais saudável. Realizamos a higienização profunda de estofados, eliminando ácaros, fungos, bactérias e odores com segurança. Somos uma empresa que lava sofá especializada em lavagem de sofás com foco em saúde e bem-estar. Atendimento com limpeza de estofados a domicílio, perfeito para quem sofre com alergias ou deseja mais qualidade de vida com uma lavagem de estofados profunda e eficaz.'
      },
      {
        icon:'bi bi-star', tittle:'Limpeza de Tapetes', text:'Fazemos a lavagem de tapetes com eficiência e cuidado, atendendo todos os tipos, tamanhos e materiais. Eliminamos sujeiras profundas, manchas e odores. Como empresa que lava sofá e estofados, também aplicamos as melhores técnicas em lavagem de estofados e limpeza de sofá, ampliando nosso atendimento para garantir um ambiente limpo e seguro. Atendemos com limpeza de estofados a domicílio, incluindo lavagem de colchões e lavagem de sofás.'
      },
      {
        icon:'bi bi-shield', tittle:'Limpeza de Cadeiras e Poltronas', text:'Realizamos a limpeza profissional de estofados em cadeiras, poltronas e puffs com total cuidado e eficiência. Nossa equipe é especializada em higienização de sofá e limpeza de sofá, mantendo a estética e a durabilidade dos seus móveis. Atuamos com limpeza de estofados a domicílio, utilizando os mesmos processos de excelência da lavagem de estofados para garantir conforto e higiene. Se você busca uma empresa que lava sofá e cuida dos seus móveis como ninguém, conte conosco.'
      },
      {
        icon:'bi bi-stars', tittle:'Higienização de Colchão', text:'A higienização de colchão é essencial para garantir uma noite de sono saudável, livre de ácaros, bactérias e fungos. Nosso serviço utiliza técnicas seguras e eficazes de lavagem de estofados e limpeza profissional de estofados, removendo odores, manchas e microrganismos acumulados com o tempo. Como empresa que lava sofá, também realizamos lavagem de colchões a domicílio, com o mesmo cuidado e qualidade que aplicamos na lavagem de sofás e na limpeza de sofá. Proteja sua saúde e da sua família com nosso atendimento especializado.'
      }
    ]

}
