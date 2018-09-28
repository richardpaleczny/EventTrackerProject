import { HealthyHabitsService } from './healthy-habits.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HealthyHabitsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
