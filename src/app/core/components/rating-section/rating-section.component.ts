import { Component, OnInit } from '@angular/core';
import { RatingCardComponent } from "../../../shared/components/rating-card/rating-card.component";
import { CommonModule } from '@angular/common';

export interface RatingInfo {
    rating: string,
    name: string,
    loc: string
 }

@Component({
  selector: 'app-rating-section',
  imports: [RatingCardComponent, CommonModule],
  templateUrl: './rating-section.component.html',
  styleUrl: './rating-section.component.css'
})
export class RatingSectionComponent {

  ratingList: RatingInfo[] =[
     {
    rating: 'Com dois filhos e um pet, eu precisava de uma lavagem e higienização de estofados de verdade. Fiquei chocada como o sofá ficou limpo, o cheiro de cachorro sumiu 100%!',
    name: 'Camila Ribeiro',
    loc: 'Tijuca, RJ'
  },
  {
    rating: 'A limpeza de estofados a domicílio foi uma mão na roda. Na correria, não tenho tempo pra nada. O serviço foi rápido e tiraram uma mancha de suco que eu achava impossível. Recomendo!',
    name: 'Ricardo Almeida',
    loc: 'Barra da Tijuca, RJ'
  },
  {
    rating: 'Contratei a limpeza profissional de estofado* por causa dos pelos dos meus gatos e o resultado foi impecável. Aproveitei e pedi também a lavagem de tapetes, e minha sala ficou nova!',
    name: 'Juliana Costa',
    loc: 'Jacarepaguá, RJ'
  },
  {
    rating: 'Minha filha fez xixi no sofá e a higienização de sofá que eles fizeram salvou a gente! O cheiro não saía com nada, mas a equipe resolveu em uma tarde. Serviço profissional demais.',
    name: 'Bruno Gonçalves',
    loc: 'Vargem Grande, RJ'
  },
  {
    rating: 'Na correria, a gente acaba comendo no sofá. O serviço de lavagem de sofá foi excelente, tirou toda a gordura e o tecido ficou com um cheirinho de limpeza ótimo. Pontualidade nota 10.',
    name: 'Patrícia Lima',
    loc: 'São Cristóvão, RJ'
  },
  {
    rating: 'Eu sinceramente achava que teria que trocar o sofá. Por isso procurei uma lavagem de estofados e o resultado foi um milagre. Tiraram todas as manchas de comida e patas de cachorro.',
    name: 'Fernando Oliveira',
    loc: 'Maracanã, RJ'
  },
  {
    rating: 'Contratei a higienização de estofados e também a lavagem de cadeiras da sala de jantar. Meu gato teve um acidente na poltrona e o cheiro sumiu completamente. Impressionante!',
    name: 'Letícia Martins',
    loc: 'Jardim Sulacap, RJ'
  },
  {
    rating: 'Estava pesquisando por uma empresa que lava sofá e achei vocês por indicação. Foi a melhor decisão! Com bebê novo em casa, ter o sofá limpinho não tem preço. Serviço de confiança.',
    name: 'Gustavo Mendes',
    loc: 'Camorim, RJ'
  },
  {
    rating: 'Essa limpeza de sofá foi essencial para minha rinite, tirou todo o pelo do meu cachorro. O resultado foi tão bom que já estou pensando em agendar a lavagem de colchões com eles.',
    name: 'Eduardo Ferreira',
    loc: 'Maria da Graça, RJ'
  },
  {
    rating: 'Eu era cética, mas a lavagem de sofás que eles fazem é de outro nível. A mancha de vinho tinto que meu filho derrubou sumiu completamente. Técnica que faz a diferença.',
    name: 'Vanessa Souza',
    loc: 'Méier, RJ'
  },
  {
    rating: 'A vida com crianças transforma o sofá em parquinho. A lavagem e higienização de estofados devolveu a dignidade pra nossa sala. Ficou impecável, super higiênico.',
    name: 'André Bastos',
    loc: 'Barra da Tijuca, RJ'
  },
  {
    rating: 'Adotei um filhote e precisei de uma limpeza de estofados de emergência. Vocês salvaram meu estofado e minha paz de espírito. Muito obrigada pelo profissionalismo!',
    name: 'Mariana Azevedo',
    loc: 'Tijuca, RJ'
  }
  ]

  avaliacoesExibidas: RatingInfo[] = [];

  constructor(){}

   ngOnInit(): void{
    this.avaliacoesExibidas = this.embaralharArray(this.ratingList).slice(0,3); 
  } 

  private embaralharArray(array: any[]): any[] {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0){
      randomIndex = Math.floor(Math.random() * currentIndex);

      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  } 

}
