import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubsComponent } from './clubs/clubs.component';
import { CoachsComponent } from './coachs/coachs.component';
import { ContactComponent } from './contact/contact.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { ActivitiesComponent } from './activities/activities.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  { path:'clubs', component: ClubsComponent},
  { path: 'coachs', component: CoachsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'tarif', component: TarifsComponent},
  { path: 'activities', component: ActivitiesComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
