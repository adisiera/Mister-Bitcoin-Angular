import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleChartsModule } from 'angular-google-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { FormsModule } from '@angular/forms';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { AboutComponent } from './cmps/about/about.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MovesPreviewComponent } from './cmps/moves-preview/moves-preview.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ContactDetailsPageComponent,
    StatisticPageComponent,
    ContactPreviewComponent,
    ContactListComponent,
    ContactFilterComponent,
    AppHeaderComponent,
    AboutComponent,
    ContactEditComponent,
    SignupPageComponent,
    MovesListComponent,
    TransferFundComponent,
    MovesPreviewComponent

  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    GoogleChartsModule,
    FormsModule,
    NoopAnimationsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
