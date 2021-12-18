import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'users',
        loadChildren: () => import('../user/users/users.module').then(m => m.UsersPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('src/app/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'sale',
        loadChildren: () => import('../sale/sale.module').then( m => m.SalePageModule)
      },
      {
        path: 'editSale',
        loadChildren: () => import('../sale/edit-sale/edit-sale.module').then( m => m.EditSalePageModule)
      },
      {
        path: 'product',
        loadChildren: () => import('../product/product/product.module').then(m => m.ProductPageModule)
      },
      {
        path: 'newProduct',
        loadChildren: () => import('../product/add-product/add-product.module').then(m => m.AddProductPageModule)
      },

      {
        path: 'provide',
        loadChildren: () => import('../provide/provide.module').then( m => m.ProvidePageModule)
      },
      {
        path: 'editProvide',
        loadChildren: () => import('../provide/edit-provide/edit-provide.module').then( m => m.EditProvidePageModule)
      },
      {
        path: 'newUser',
        loadChildren: () => import('../user/add-user/add-user.module').then(m => m.AddUserPageModule)
      },

      {
        path: 'updateUser',
        loadChildren: () => import('../user/edit-user/edit-user.module').then(m => m.EditUserPageModule)
      },
      {
        path: 'updateProduct',
        loadChildren: () => import('../product/edit-product/edit-product.module').then(m => m.EditProductPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
