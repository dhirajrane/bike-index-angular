import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { SessionStorageStateService } from '../../shared';
import { BikeListData } from '../bike-search-list/bike-list-data';
import { BikeCountService } from '../services/bike-count.service';
import { BikeListService } from '../services/bike-list.service';

@Component({
  selector: 'app-bike-search',
  templateUrl: './bike-search.component.html',
  styleUrls: ['./bike-search.component.scss']
})
export class BikeSearchComponent  {
  bikeList!: BikeListData[];
  bikeCount!: number;
  noResultAvailable: boolean = false;
  loading: boolean = false;
  constructor(private readonly bikeListService: BikeListService, private readonly router: Router, private sessionStorageStateService: SessionStorageStateService, private readonly bikeCountService: BikeCountService) { }

  async onCityNameEntered(eventData: {cityName: string}) {
    this.loading = true;
    const bikeList$ = this.bikeListService.getBikes(eventData.cityName);
    this.bikeList = await firstValueFrom(bikeList$);
   
    const bikeCount$ = this.bikeCountService.getBikeCount(eventData.cityName);
    this.bikeCount = await firstValueFrom(bikeCount$);

    this.noResultAvailable = this.bikeCount === 0;

    this.sessionStorageStateService.saveData({cityName: eventData.cityName, currentPage: 1, totalCount: this.bikeCount});
    this.loading = false;
  }

  async getDetails(event: Event) {
    const target = event.target as HTMLInputElement;
    await this.router.navigate(['bike-details'], { queryParams: { bikeId: target.closest('.bike-block')?.id } })
  }
}
