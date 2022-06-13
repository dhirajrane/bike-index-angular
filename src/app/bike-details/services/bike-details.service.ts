import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BikeDetails } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class BikeDetailsService {
  constructor(
    private httpClient: HttpClient
  ) { }

  getBikeDetails(bikeId: number) {
    const url = `https://bikeindex.org/api/v3/bikes/${bikeId}`
    return this.httpClient.get<BikeDetails>(url);
  }
}
