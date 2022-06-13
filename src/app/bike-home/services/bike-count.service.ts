import { BikeCountResponse } from './../../shared';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikeCountService {

  constructor(private httpClient: HttpClient) { }

  getBikeCount(cityName: string): Observable<number> {
    const url = `https://bikeindex.org/api/v3/search/count?location=${cityName}&distance=10&stolenness=proximity`;
    return this.httpClient.get<BikeCountResponse>(url).pipe(map(reposne => reposne.proximity));
  } 
}
