import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WikiSearchRoutingModule } from './wiki-search-routing.module';
import { WikiSearchHomeComponent } from './wiki-search-home/wiki-search-home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PageListComponent } from './page-list/page-list.component';


@NgModule({
  declarations: [WikiSearchHomeComponent, SearchBarComponent, PageListComponent],
  imports: [
    CommonModule,
    WikiSearchRoutingModule,
  ]
})
export class WikiSearchModule { }
