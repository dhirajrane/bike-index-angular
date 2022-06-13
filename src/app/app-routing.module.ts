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
      },
      {
        path: "**", 
        pathMatch: "full", 
        loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
