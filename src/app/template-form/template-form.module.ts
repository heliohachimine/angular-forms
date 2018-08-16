import { FormDebugComponent } from './../form-debug/form-debug.component';
import { TemplateFormComponent } from './template-form.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TemplateFormComponent,
    FormDebugComponent
  ]
})
export class TemplateFormModule { }
 