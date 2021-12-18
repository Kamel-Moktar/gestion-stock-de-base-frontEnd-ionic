import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalePage } from './sale.page';

const routes: Routes = [
  {
    path: '',
    component: SalePage
  },
  {
    path: 'edit-sale',
    loadChildren: () => import('./edit-sale/edit-sale.module').then( m => m.EditSalePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalePageRoutingModule {}
