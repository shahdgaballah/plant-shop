import { Component } from '@angular/core';
import { HeroSliderComponent } from './hero-slider/hero-slider.component';
import { BestsellingSliderComponent } from './bestselling-slider/bestselling-slider.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSliderComponent, BestsellingSliderComponent, AboutusComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
