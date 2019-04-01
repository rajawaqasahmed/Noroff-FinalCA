import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app/app.component';
import { LoginComponent } from './components/login-component/login-component.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { routing } from './app.routes';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CardSpecificComponent } from './pages/card-specific/card-specific.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardPageComponent,
    LoginPageComponent,
    CardSpecificComponent,
    NavbarComponent,
    FooterComponent,
    ContactPageComponent,
    AboutPageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
