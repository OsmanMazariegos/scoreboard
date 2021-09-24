import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogGoalComponent } from './dialog-goal/dialog-goal.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { DialogWinnerComponent } from './dialog-winner/dialog-winner.component';
import { DialogInitComponent } from './dialog-init/dialog-init.component';
import { LeagueComponent } from './components/league/league.component';
import { InitComponent } from './components/init/init.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DialogGoalComponent,
    DialogWinnerComponent,
    DialogInitComponent,
    LeagueComponent,
    InitComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    MatTableModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
