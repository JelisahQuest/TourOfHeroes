import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 1, name: 'Alex'},
      {id: 2, name: 'Chris'},
      {id: 3, name: 'Joe'},
      {id: 4, name: 'Katrina'},
      {id: 5, name: 'Deborah'},
      {id: 6, name: 'Russ'},
      {id: 7, name: 'Lila'},
      {id: 8, name: 'Maggie'},
    ];

    return {heroes};
  }
}
