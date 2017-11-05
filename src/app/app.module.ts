import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { WordHighlightModule } from './wordhighlight/wordhighlight.module';

@NgModule({
  imports:      [ BrowserModule, WordHighlightModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
