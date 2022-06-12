import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'bikes-search' },
      {
        path: "bikes-search",
        loadChildren: () => import('./bike-home/bike-home.module').then(m => m.BikeHomeModule)
      },
      {
        path: "bike-details",
        loadChildren: () => import('./bike-details/bike-details.module').then(m => m.BikeDetailsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
