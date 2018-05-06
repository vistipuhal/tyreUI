import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from "@angular/http";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WheelFormComponent } from './wheelForm/wheelForm.component';
import { BusFormComponent } from './busForm/busForm.component';
import { TyreDetailsComponent } from './tyreDetails/tyreDetails.component';
import { TyreSearchComponent } from './tyreSearch/tyreSearch.component';
import { BusSearchComponent } from './busSearch/busSearch.component';
import { BusDetailsComponent } from './busDetails/busDetails.component';
import {MessageService} from './service/message.service';

import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';

const appRoutes: Routes = [
  { path: 'addwheel', component: WheelFormComponent },
  { path: 'addbus',   component: BusFormComponent },  
  { path: 'showwheel/:id',   component: TyreDetailsComponent },  
  { path: 'showbus/:id',   component: BusDetailsComponent },  
  { path: 'searchtyre',   component: TyreSearchComponent },  
  { path: 'searchbus',   component: BusSearchComponent },  
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    WheelFormComponent,
    BusFormComponent,
    TyreDetailsComponent,
    BusDetailsComponent,
    TyreSearchComponent,
    BusSearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    // DatepickerModule,
    // BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } 
    )
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
