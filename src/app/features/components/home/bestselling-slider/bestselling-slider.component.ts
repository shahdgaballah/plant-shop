import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PlantsService } from '../../../services/services/plants.service';

@Component({
  selector: 'app-bestselling-slider',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './bestselling-slider.component.html',
  styleUrl: './bestselling-slider.component.css'
})
export class BestsellingSliderComponent implements OnInit {
  bestsellingPlants: any[] = [];

  constructor(private plantsService: PlantsService) {}

  ngOnInit() {
    this.plantsService.getPlants().subscribe(res => {
      this.bestsellingPlants = res.results?.slice(0, 3) || [];
    });
  }
}
