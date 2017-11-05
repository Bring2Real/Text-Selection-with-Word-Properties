import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  sentence: string = '';

  setSentence (st: string) {
    this.sentence = st;
  }
}