import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProvidePageRoutingModule } from './edit-provide-routing.module';

import { EditProvidePage } from './edit-provide.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EditProvidePageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [EditProvidePage]
})
export class EditProvidePageModule {}
