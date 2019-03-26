import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MypipePipe } from './mypipe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MypipePipe]
})
export class PipeModule { }
