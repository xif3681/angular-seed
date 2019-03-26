import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DirectiveModule } from '../directive/directive.module';
// import { HighlightmyDirective } from '../directive/highlightmy.directive';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    DirectiveModule
  ],
  declarations: [
    HomeComponent,
    // HighlightmyDirective
  ]
})
export class HomeModule { }
