import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ClubsComponent } from './clubs/clubs.component';
import { CoachsComponent } from './coachs/coachs.component';
import { ContactComponent } from './contact/contact.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { ActivitiesComponent } from './activities/activities.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClubsComponent,
    CoachsComponent,
    ContactComponent,
    TarifsComponent,
    ActivitiesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
