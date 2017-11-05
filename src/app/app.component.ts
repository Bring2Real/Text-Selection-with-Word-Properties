import { Component, ViewChild } from '@angular/core';
import { WordHighlightComponent } from './wordhighlight/wordhighlight.component'

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <cm-wordhighlight
      [data] = "{sentence: 'Mike Kess wants to buy cheese pizza'}"
    ></cm-wordhighlight>
  `,
})
export class AppComponent  {
  @ViewChild(WordHighlightComponent) child: WordHighlightComponent;
  
  name = 'Angular';
}
