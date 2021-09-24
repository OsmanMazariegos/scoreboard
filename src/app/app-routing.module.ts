import { AppComponent } from './app.component';
import { LeagueComponent } from './components/league/league.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from './components/init/init.component';

const routes: Routes = [
  { path: '', redirectTo: '/league', pathMatch: 'full' },
  { path: 'league', component: InitComponent },
  { path: 'league/:id', component: LeagueComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
