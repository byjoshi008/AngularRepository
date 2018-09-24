import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineTextEditComponent } from './inline-text-edit/inline-text-edit.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    InlineTextEditComponent,
    CheckboxComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InlineTextEditComponent,
    CheckboxComponent
  ]
})
export class SharedModule { }
