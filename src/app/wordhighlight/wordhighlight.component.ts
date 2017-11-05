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

  save() {
    this.dataService.save();
  }

  select(index) {
    if (!this.dataService.words[index].selected) {
      this.dataService.newTag.push(this.dataService.words[index].data);
    } else {
      let remove = this.dataService.words[index].data;
      this.dataService.newTag = this.dataService.newTag.filter(function (a) {
        return a != remove;
      });
    }
    this.dataService.words[index].selected = !this.dataService.words[index].selected;
  }

  saveTag() {
    if (this.dataService.tagName == '') {
      alert('Insert Tag Name');
    } else {
      this.dataService.saveTag();
    }
  }

  clearTag () {
    this.dataService.tagName = '';
    this.dataService.clearTag ();
  }

  removeTag (no: any) {
    if (confirm('Are you sure to delete this tag ?')) {
      this.dataService.removeTag(no);
    }
  }
}