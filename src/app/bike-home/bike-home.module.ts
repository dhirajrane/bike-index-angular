import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BikeHomeRoutingModule } from './bike-home-routing.module';
import { BikeSearchComponent } from './bike-search/bike-search.component';
import { BikeSearchInputComponent } from './bike-search-input/bike-search-input.component';
import { BikeSearchListComponent } from './bike-search-list/bike-search-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BikeSearchComponent,
    BikeSearchInputComponent,
    BikeSearchListComponent
  ],
  imports: [
    CommonModule,
    BikeHomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class BikeHomeModule { }
