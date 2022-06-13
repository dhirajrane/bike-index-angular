import { BikeListData } from './bike-list-data';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bike-search-list',
  templateUrl: './bike-search-list.component.html',
  styleUrls: ['./bike-search-list.component.scss']
})
export class BikeSearchListComponent  {
  @Input() bikeData!: BikeListData;
  constructor() { }
}
