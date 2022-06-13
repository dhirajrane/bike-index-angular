import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Bike, BikeSearchResponse } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class BikeListService {
  constructor(private httpClient: HttpClient) { }

  getBikes(cityName: string):Observable<Bike[]> {
    const url = `https://bikeindex.org/api/v3/search?page=1&per_page=25&location=${cityName.toLowerCase()}&distance=10&stolenness=proximity`;
    
    return this.httpClient.get<BikeSearchResponse>(url).pipe(map(resposne => resposne.bikes));
  } 
}
