import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  baseUrl = 'http://en.wikipedia.org/w/api.php';

  // http client dependency injection
  constructor(private httpClient: HttpClient) { }

  public search(term: string) {
    return this.httpClient.get(this.baseUrl, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*',
      }
    });
  }
}
