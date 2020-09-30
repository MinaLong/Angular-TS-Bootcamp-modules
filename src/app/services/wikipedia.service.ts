import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';

// always define our object in ts so that it can catch type errors for us
// don't need to define everything, just the variables that we will make use of
interface WikipediaResponse {
  query: {
    search: {
      pageid: number,
      snippet: string,
      title: string,
    }[],
  },
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  baseUrl = 'http://en.wikipedia.org/w/api.php';

  // http client dependency injection
  constructor(private httpClient: HttpClient) { }

  public search(term: string) {
    // returns an observable, so we can chain on pipe to it
    return this.httpClient.get<WikipediaResponse>(this.baseUrl, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*',
      }
    }).pipe(
      pluck('query', 'search')
    );
  }
}
