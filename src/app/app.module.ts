import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './share/shared.module';
import { HttpClient } from '@angular/common/http';

import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,


  ],
  providers: [
    provideClientHydration(),
    HttpClient,
    provideHttpClient(),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
