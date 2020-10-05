import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthHttpInterceptor } from './shared/auth-http-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    // The order of the import matters - it decides how the routing search order
    BrowserModule,

    // To implement lazy loading, do not import the element module in app module.ts
    // ElementsModule, // Import Modules instead of components
    // CollectionsModule,
    AppRoutingModule,

    // angular module to make http request
    // need to import this module to use HttpClient class in service modules
    HttpClientModule,

    // to use reactive forms (two main forms: reactive forms and template forms)
    // to use template forms we import the 'FormsModule' instead
    ReactiveFormsModule,
  ],

  // providers are the old dependency injection handling
  // we don't often use providers
  providers: [
    // this is set up for project /emails/emails-home/
    // directly used in shared/auth-http-interceptors
    // it tells angular that everytime depencency injection request http interceptors
    // let it use the AuthHttpInterceptor class we define
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
