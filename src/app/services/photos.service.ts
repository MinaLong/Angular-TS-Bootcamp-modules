import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface Photo {
  urls: {
    small: string,
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  // unsplash.com demo quota limit 50/hour
  // Angular TS project
  apiAccessKey = 'UMaFsgI1cqkptnYtJvudoecyFwE6pU6lz1Iz6LrOucw';
  apiSecretKey = 'SPeTPZ-nlnEbT_B5LLQJeM7thonb9tUV2CYEVdXmtao';

  baseURl = 'https://api.unsplash.com';
  endpoint = '/photos/random';
  clientId = 'Client-ID ' + this.apiAccessKey;

  constructor(private httpClient: HttpClient) { }

  public fetchRandomPhotoURL() {
    return this.httpClient.get<Photo>(
      this.baseURl + this.endpoint, {
      headers: {
        'Accept-Version': 'v1',
        Authorization: this.clientId,
      },
    }).
      pipe(
        pluck('urls', 'small'),
      );
  }
}
