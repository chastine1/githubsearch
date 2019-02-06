import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule} from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
 
  
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
