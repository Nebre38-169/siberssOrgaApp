import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooleanFrPipe } from './boolean-fr/boolean-fr.pipe';
import { DateFrPipe } from './date-fr/date-fr.pipe';



@NgModule({
  declarations: [
    BooleanFrPipe,
    DateFrPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BooleanFrPipe,
    DateFrPipe
  ]
})
export class PipeModule {
  static forRoot() {
    return {
        ngModule: PipeModule,
        providers: [],
    };
  }
}
