import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenderComponent } from './render.component';



@NgModule({
  declarations: [
    RenderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RenderComponent
  ]
})
export class RenderModule { }
