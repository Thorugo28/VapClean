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
        icon: 'bi bi-house-door', tittle: 'Limpeza de Estofados', text:'Empresa que lava sofá com excelência, especializada em limpeza profissional de estofados, incluindo sofás, cadeiras e puffs. Oferecemos lavagem de estofados a domicílio, removendo manchas, odores e sujeiras profundas com segurança e tecnologia. Ideal para quem busca limpeza de sofá, higienização de estofados e lavagem de sofás de forma prática e eficiente.'
      },
      {
        icon: 'bi bi-star', tittle: 'Higienização Profunda de Estofados', text:'Realizamos higienização de sofá profunda, eliminando ácaros, bactérias e odores, ideal para quem valoriza saúde e bem-estar. Nossa empresa que lava sofá atua com foco em lavagem de estofados eficaz, atendendo com limpeza de estofados a domicílio. Um serviço essencial para quem sofre com alergias e busca qualidade de vida através de uma limpeza profissional de estofados.'
      },
      {
        icon: 'bi bi-shield', tittle: 'Limpeza de Cadeiras e Poltronas', text:'Especialistas em limpeza profissional de estofados, cuidamos de cadeiras, poltronas e puffs com excelência. Unimos higienização de sofá e lavagem de estofados para garantir durabilidade e conforto. Como empresa que lava sofá, atendemos com limpeza de estofados a domicílio, sempre com atenção aos detalhes e à estética dos seus móveis.'
      },
      {
        icon:'bi bi-star', tittle:'Limpeza de Tapetes', text:'Oferecemos lavagem de tapetes com qualidade e cuidado, atendendo todos os tipos de material. Nossa empresa que lava sofá aplica técnicas de lavagem de estofados, limpeza de sofá e higienização de estofados, inclusive com limpeza de estofados a domicílio, garantindo um ambiente mais limpo, seguro e completo, incluindo também lavagem de colchões e lavagem de sofás.'
      },
      {
        icon:'bi bi-shield', tittle:'Higienização de Colchão', text:'A higienização de colchão elimina microrganismos e melhora a qualidade do sono. Atuamos com lavagem de colchões a domicílio, utilizando os mesmos padrões de excelência da nossa empresa que lava sofá. Com técnicas seguras de lavagem de estofados e limpeza profissional de estofados, removemos odores, manchas e ácaros, promovendo saúde e bem-estar para toda a família.'
      },
      {
        icon:'bi bi-stars', tittle:'Lavagem de Sofá', text:'Somos referência em lavagem de sofá, removendo sujeiras, odores e ácaros com máxima eficiência. Com atendimento a domicílio, nossa empresa que lava sofá oferece limpeza de estofados, higienização de sofá e lavagem de estofados com resultados visíveis. Ideal para quem busca conforto, saúde e a conservação de seus estofados com limpeza profissional de estofados.'
      }
    ]

}
