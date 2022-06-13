import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bike, BikeDetails } from 'src/app/shared/models';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.scss']
})
export class BikeDetailsComponent implements OnInit  {
  bikeDetails!: Bike;
  constructor(private readonly route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.bikeDetails = (this.route.snapshot.data['bikeDetails'] as BikeDetails).bike;
  }

  getStolenTime() {
    const date = new Date(this.bikeDetails.stolen_record.date_stolen * 1000);
    return date.toLocaleDateString() + " at " + date.toLocaleTimeString();
  }

  getImageUrl(): string {
    return this.bikeDetails.public_images[0]?.large || '/assets/images/bike.svg';
  }
}
