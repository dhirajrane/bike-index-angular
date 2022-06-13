import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeDetailsResolver } from './bike-details.resolver';
import { BikeDetailsComponent } from './bike-details/bike-details.component';

const routes: Routes = [{
  path: '',
  component: BikeDetailsComponent,
  resolve: { bikeDetails: BikeDetailsResolver }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikeDetailsRoutingModule { }
