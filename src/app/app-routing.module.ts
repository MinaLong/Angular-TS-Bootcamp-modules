import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  // Lasy loading. Define here only when path = /elements 
  // we then render the elements module to Angular app module
  // do not load /elements when first starting the app
  {
    path: 'elements',
    loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule),
  },
  {
    path: 'collections',
    loadChildren: () => import('./collections/collections.module').then(m => m.CollectionsModule),
  },
  {
    path: 'views',
    loadChildren: () => import('./views/views.module').then(m => m.ViewsModule),
  },
  {
    path: 'mods',
    loadChildren: () => import('./mods/mods.module').then(m => m.ModsModule),
  },
  {
    path: 'search',
    loadChildren: () => import('./wiki-search/wiki-search.module').then(m => m.WikiSearchModule),
  },
  {
    path: 'photos',
    loadChildren: () => import('./photos/photos.module').then(m => m.PhotosModule),
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**', // If we don't find any other routes
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
