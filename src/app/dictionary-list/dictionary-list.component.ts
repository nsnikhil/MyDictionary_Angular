import {Component, OnInit} from '@angular/core';
import {NetworkApiServiceService} from '../network/network-api-service.service';

@Component({
  selector: 'app-dictionary-list',
  templateUrl: './dictionary-list.component.html',
  styleUrls: ['./dictionary-list.component.css']
})
export class DictionaryListComponent implements OnInit {

  wordModelList: WordModel[];

  constructor(public networkServiceApi: NetworkApiServiceService) {
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.networkServiceApi.getDictionaryList().subscribe(results => {
      this.wordModelList = results;
    });
  }

}
