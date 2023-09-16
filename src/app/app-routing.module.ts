import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerListComponent } from './modules/beer-list/beer-list.component';

const routes: Routes = [
  {path: 'beer-list', component: BeerListComponent},
  {path: '**', redirectTo: 'beer-list'},
  {path: '', redirectTo: 'beer-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
