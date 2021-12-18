import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProvidePage } from './edit-provide.page';

const routes: Routes = [
  {
    path: '',
    component: EditProvidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProvidePageRoutingModule {}
