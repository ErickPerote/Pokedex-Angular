import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokHeaderComponent } from './pok-header/pok-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { RoutingModule } from '../pages/routing.modules';



@NgModule({
  declarations: [
    PokHeaderComponent,
    PokeSearchComponent,
    PokeListComponent
  ],
  exports: [
    PokHeaderComponent,
    PokeSearchComponent,
    PokeListComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class SharedModule { }
