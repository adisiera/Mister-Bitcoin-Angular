import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ContactResolverService } from './services/contact-resolver.service';


const routes: Routes = [
  { path: 'contact/edit/:id', resolve: {contact: ContactResolverService}, component: ContactEditComponent },
  { path: 'contact/edit', resolve: {contact: ContactResolverService}, component: ContactEditComponent },
  { path: 'contact/:id', resolve: {contact: ContactResolverService}, component: ContactDetailsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'chart', component: StatisticPageComponent },
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],





  exports: [RouterModule]
})
export class AppRoutingModule { }
