import { Routes } from "@angular/router";
import { PlantsListComponent } from "../plantlist/plantlist.component";

export const productsroutes: Routes= [
    {path: 'list', component: PlantsListComponent },
    {path: '', redirectTo: 'list', pathMatch: 'full'}
];