import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChipsModule } from './chips/chips.module';
import { FormsModule } from '@angular/forms';
import { RenderModule } from './render/render.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChipsModule,
    FormsModule,
    RenderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
