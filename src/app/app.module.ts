import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './SecModules/app-routing.module';
import { DashboardPageModule } from './Views/Dashboard/dashboard-page.module';
import { LandingPageModule } from './Views/LandingPage/landing-page.module';
import { MatModules } from './SecModules/mat.module';
import { Page404Component } from './Views/page404/page404.component';

@NgModule({
  declarations: [
	AppComponent,
	Page404Component
  ],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule,
	
	MatModules,
	AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
