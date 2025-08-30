import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PlantsService } from '../../services/services/plants.service';

@Component({
  selector: 'app-plantlist',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './plantlist.component.html',
  styleUrl: './plantlist.component.css',
  providers: [PlantsService]
})
export class PlantsListComponent implements OnInit {
  plants: any[] = [];

  constructor(private plantsService: PlantsService) {}

  ngOnInit() {
    this.plantsService.getPlants().subscribe({
      next: (res) => {
        this.plants = res.results || [];
      },
      error: (err) => {
        console.error(err);
        this.plants = [];
      }
    });
  }
}