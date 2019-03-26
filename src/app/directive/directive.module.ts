import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HighlightDirective, UnlessDirective]
})
export class DirectiveModule { }
