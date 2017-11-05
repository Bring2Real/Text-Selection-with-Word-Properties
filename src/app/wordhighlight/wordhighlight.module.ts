import { NgModule }      from '@angular/core';

import { WordHighlightComponent }  from './wordhighlight.component';
import { DataService } from './data.service';

@NgModule({
  imports: [],
  declarations: [ WordHighlightComponent ],
  exports: [ WordHighlightComponent ],
  providers: [ DataService ]
})
export class WordHighlightModule { }
