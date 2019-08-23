import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerComponent} from './customer/customer.component';
import {ItemComponent} from './item/item.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {RouterModule, Routes} from '@angular/router';


const appRouting: Routes = [{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
{path: 'customer', component : CustomerComponent},
  {path: 'item' , component : ItemComponent},
  {path: 'dashboard' , component : DashboardComponent},
  {path: '**', component : NotfoundComponent},
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRouting)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [CustomerComponent, ItemComponent, DashboardComponent, NotfoundComponent];
