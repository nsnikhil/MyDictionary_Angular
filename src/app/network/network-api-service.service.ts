import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetworkApiServiceService {

  private BASE_URL = 'http://138.68.74.29';
  private GET_LIST_PATH = '/php/readAll.php';

  constructor(private http: HttpClient) {
  }

  getDictionaryList() {
    return this.http.get<WordModel[]>(this.BASE_URL.concat(this.GET_LIST_PATH));
  }

}
