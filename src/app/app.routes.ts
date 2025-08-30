import { Routes } from '@angular/router';
import { productsroutes } from './features/components/products/products.routes';
import { HomeComponent } from './features/components/home/home.component';
import { AboutusComponent } from './features/components/home/aboutus/aboutus.component';
import { NotFoundComponent } from './features/components/not-found/not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'products', loadComponent: () => import('./features/components/products/products.component').then(c=> c.ProductsComponent), children: productsroutes},
    {path: 'about', component: AboutusComponent},
    {path: '**', component: NotFoundComponent}
];
