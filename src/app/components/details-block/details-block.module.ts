import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsBlockComponent } from './details-block.component';

@NgModule({
  declarations: [ DetailsBlockComponent ],
  imports: [
    CommonModule
  ],
  exports: [ DetailsBlockComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DetailsBlockModule { }
