import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { WordHighlightComponent }  from './wordhighlight.component';
import { DataService } from './data.service';

@NgModule({
  imports: [ FormsModule, BrowserModule ],
  declarations: [ WordHighlightComponent ],
  exports: [ WordHighlightComponent ],
  providers: [ DataService ]
})
export class WordHighlightModule { }
