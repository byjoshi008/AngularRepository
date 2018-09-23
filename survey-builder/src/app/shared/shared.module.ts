import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InlineTextEditComponent } from './inline-text-edit/inline-text-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    InlineTextEditComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    InlineTextEditComponent
  ]
})
export class SharedModule { }
