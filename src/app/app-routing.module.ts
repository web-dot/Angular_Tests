import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UITabsComponent } from './ui_tabs/ui-tabs.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InteractiveInputDisplayComponent } from './interactive-input-display/interactive-input-display.component';

const routes: Routes = [
  {
    path: '',
    component : LandingPageComponent
  },
  {
    path: 'tabs',
    component : UITabsComponent
  },
  {
    path: 'interactive-input',
    component : InteractiveInputDisplayComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
