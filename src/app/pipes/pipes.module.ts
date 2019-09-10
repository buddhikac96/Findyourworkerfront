import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UndefinedStringsPipe } from './undefined-strings.pipe';



@NgModule({
  declarations: [
    UndefinedStringsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [UndefinedStringsPipe]
})
export class PipesModule { }
