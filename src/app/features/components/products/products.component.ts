import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlantsListComponent } from '../plantlist/plantlist.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet, PlantsListComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
