import { Component } from '@angular/core';
import { BikeSearchResponse } from 'src/app/shared/models';
import { BikeListData } from '../bike-search-list/bike-list-data';
import { BikeListService } from '../services/bike-list.service';

@Component({
  selector: 'app-bike-search',
  templateUrl: './bike-search.component.html',
  styleUrls: ['./bike-search.component.scss']
})
export class BikeSearchComponent  {
  bikeList!: BikeListData[];
  constructor(private readonly bikeListService: BikeListService) { }

  onCityNameEntered(eventData: {cityName: string}) {
    this.bikeListService.getBikes(eventData.cityName).subscribe((data: BikeSearchResponse) => {
      this.bikeList = data.bikes;
    });
  }
}
