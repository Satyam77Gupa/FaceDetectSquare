import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { FitstreetComponent } from './components/fitstreet.component';
import { ServicesComponent } from './components/services.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    FitstreetComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
