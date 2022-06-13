import { Injectable } from '@angular/core';
import { BikeInput } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageStateService {
  private bikeInput = 'bike-search-input';
  constructor() { 
  }

  saveData(data: BikeInput) {
    sessionStorage.setItem(this.bikeInput, JSON.stringify(data));
  }

  getData(): BikeInput {
    const data = sessionStorage.getItem(this.bikeInput)
    return data ? JSON.parse(data)  : {};
  }
}
