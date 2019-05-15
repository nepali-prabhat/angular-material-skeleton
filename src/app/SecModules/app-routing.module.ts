import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from '../Views/page404/page404.component';

const routes: Routes = [
	{ path:'', loadChildren:'../Views/LandingPage/landing-page.module#LandingPageModule', pathMatch:'full'},
	{ path:'dashboard', loadChildren:'../Views/Dashboard/dashboard-page.module#DashboardPageModule',},
	{ path:'**', component:Page404Component }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }