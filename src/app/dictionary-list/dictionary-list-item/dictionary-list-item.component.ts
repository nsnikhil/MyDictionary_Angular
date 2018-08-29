import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dictionary-list-item',
  templateUrl: './dictionary-list-item.component.html',
  styleUrls: ['./dictionary-list-item.component.css']
})
export class DictionaryListItemComponent implements OnInit {

  @Input() wordItem: WordModel;

  constructor() {
  }

  ngOnInit() {
  }

}
