import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UITabsComponent } from './ui_tabs/ui-tabs.component';

const routes: Routes = [
  {
    path: '',
    component : UITabsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
