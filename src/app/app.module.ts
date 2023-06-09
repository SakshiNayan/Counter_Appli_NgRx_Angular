import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCounterComponent } from './counter/my-counter/my-counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/my-counter/my-counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({count: counterReducer}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
