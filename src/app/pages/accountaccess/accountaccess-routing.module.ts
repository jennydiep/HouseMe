import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountaccessPage } from './accountaccess.page';

const routes: Routes = [
  {
    path: '',
    component: AccountaccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountaccessPageRoutingModule {}
