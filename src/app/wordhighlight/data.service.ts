import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  sentence: string = '';
  words: JSON [] = [];
  tags: JSON [] = [];
  newTag: string [] = [];
  tagName: string = '';

  setSentence (st: string) {
    this.sentence = st;
    this.save ();
  }

  save () {
  	let newSentence = this.sentence;
  	for (let i = 0; i < this.tags.length; i++) {
  		newSentence = newSentence.replace(this.tags[i].word, 'tag:' + i);
  	}
  	let words = newSentence.split(' ');
  	this.words = [];
    for (let i = 0; i < words.length; i++) {
    	if (words[i].length == 0)
    		continue;
    	if (words[i].indexOf('tag:') == 0) {
    		let tIndex = words[i].substr(4);
    		this.words.push({tag: this.tags[tIndex].tag, data: this.tags[tIndex].word})
    	}
    	else
    		this.words.push({data: words[i]});
    }
    this.saveToJSON();
  }

  isExists(ary: JSON[], data: any, keys) {
  	for (let i = 0; i < ary.length; i++) {
  		let flag = true;
  		for (let j = 0; j < keys.length; j++) {
  			if (ary[i][keys[j]] != data[keys[j]])
  				flag = false;
  		}
  		if (flag)
  			return i;
  	}
  	return -1;
  }

  saveTag () {
  	let isExist = this.ifTagExists(this.tagName);
  	if (isExist) {
  		alert('Tag with this name already exists');
  	} else {
  		let tag = this.newTag.join(' ');
  		this.tags.push({no: this.tags.length, tag: this.tagName, word: tag});
  		this.tagName = '';
  		this.clearTag();
  		console.log(this.tags);
  		this.save();
  	}
  }

  clearTag () {
  	for (let i = 0; i < this.words.length; i++) {
  		this.words[i].selected = false;
  	}
  	this.newTag = [];
  }

  removeTag (no: any) {
  	for (let i = 0; i < this.tags.length; i++) {
  		if (this.tags[i].no == no) {
  			this.tags.splice(i, 1);
  			i = this.tags.length;
  		}
  	}
		this.save();
  }

  ifTagExists (name) {
  	for (let i = 0; i < this.tags.length; i++) {
  		if (this.tags[i].tag == name)
  			return true;
  	}
  	return false;
  }

  saveToJSON () {
  	let json = {};
  	json.tags = [];
  	for (let i = 0; i < this.tags.length; i++) {
  		json.tags.push({tag: this.tags[i].tag, word: this.tags[i].word});
  	}
  	json.words = [];
  	for (let i = 0; i < this.words.length; i++) {
  		json.words.push([this.words[i].data]);
  	}
  	console.log(json);
  	return JSON.stringify(json);
  }
}