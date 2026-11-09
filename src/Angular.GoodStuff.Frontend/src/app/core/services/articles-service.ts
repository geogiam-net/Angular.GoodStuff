import { Service } from '@angular/core';
import { Article } from '~core/types/article';

@Service()
export class ArticlesService {
  getDevData(): Article[] {
    return [
      {
        name: 'el cielo',
        id: '1',
        description: 'random description',
        color: 'azul',
      },
      {
        name: 'el mar',
        id: '2',
        color: 'azul',
      },
      {
        name: 'el carro',
        id: '3',
        color: 'azul',
      },
      {
        name: 'el corazon',
        id: '4',
        color: 'rojo',
      },
      {
        name: 'la manzana',
        id: '5',
        color: 'rojo',
      },
      {
        name: 'el infierno',
        id: '6',
        color: 'rojo',
      },
    ];
  }
}
