import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditSalePageRoutingModule } from './edit-sale-routing.module';

import { EditSalePage } from './edit-sale.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EditSalePageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [EditSalePage]
})
export class EditSalePageModule {}
