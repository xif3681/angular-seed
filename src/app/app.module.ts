import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceModule } from './service/service.module';
import { PipeModule } from './pipe/pipe.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DirectiveModule } from './directive/directive.module';
import { HighlightmyDirective } from './directive/highlightmy.directive';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HighlightmyDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceModule,
    PipeModule,
    DirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
