import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // HTTP_INTERCEPTORS,
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceModule } from './service/service.module';
import { PipeModule } from './pipe/pipe.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DirectiveModule } from './directive/directive.module';
import { HighlightmyDirective } from './directive/highlightmy.directive';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HighlightmyDirective,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceModule,
    PipeModule,
    DirectiveModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
