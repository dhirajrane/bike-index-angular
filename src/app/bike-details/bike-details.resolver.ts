import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BikeDetails } from '../shared/models';
import { BikeDetailsService } from './services/bike-details.service';

@Injectable({
  providedIn: 'root'
})
export class BikeDetailsResolver implements Resolve<BikeDetails> {

  constructor(private readonly bikeDetailsService: BikeDetailsService){}
  resolve(route: ActivatedRouteSnapshot): Observable<BikeDetails> {
    return this.bikeDetailsService.getBikeDetails(Number(route.queryParams['bikeId']));
  }
}
