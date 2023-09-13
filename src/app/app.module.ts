import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UITabsComponent } from './ui_tabs/ui-tabs.component';
import { InteractiveInputDisplayComponent } from './interactive-input-display/interactive-input-display.component';


@NgModule({
  declarations: [
    AppComponent,
    UITabsComponent,
    InteractiveInputDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
