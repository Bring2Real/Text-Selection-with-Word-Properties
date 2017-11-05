import { Component, OnInit, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

import { DataService } from './data.service';

@Component({
  selector: 'cm-wordhighlight',
  templateUrl: './wordhighlight.component.html',
  styleUrls: ['./wordhighlight.component.css']
})

export class WordHighlightComponent implements OnInit {
  @Input() data: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    console.log(this.data);
    this.dataService.setSentence(this.data.sentence);
  }
}