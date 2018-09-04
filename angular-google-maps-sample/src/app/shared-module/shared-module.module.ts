import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPageComponent } from './app-page/app-page.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AppPageComponent],
  exports: [CommonModule, AppPageComponent]
})
export class SharedModule {}
