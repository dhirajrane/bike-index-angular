import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BikeSearchResponse } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class BikeListService {
  baseurl = 'https://bikeindex.org/api/v3/';
  constructor(private httpClient: HttpClient) { }

  getBikes(cityName: string) {
    return this.httpClient.get<BikeSearchResponse>(`https://bikeindex.org/api/v3/search?page=1&per_page=25&location=${cityName.toLowerCase()}&distance=5&stolenness=proximity`);
  } 
}
