import { Component, ViewChild } from '@angular/core';
import { WordHighlightComponent } from './wordhighlight/wordhighlight.component'

@Component({
  selector: 'my-app',
  template: `
    <cm-wordhighlight
      [data] = "{sentence: 'Mike Kess wants to buy cheese pizza'}"
    ></cm-wordhighlight>
  `,
})
export class AppComponent  {
  @ViewChild(WordHighlightComponent) child: WordHighlightComponent;
  
  name = 'Angular JS - Create simple text selection & word properties';
}
