import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountaccessPageRoutingModule } from './accountaccess-routing.module';

import { AccountaccessPage } from './accountaccess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountaccessPageRoutingModule
  ],
  declarations: [AccountaccessPage]
})
export class AccountaccessPageModule {}
