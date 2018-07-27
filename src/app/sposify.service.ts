import { Injectable } from '@angular/core';
import {
  Http,
  Headers,
  RequestOptions
} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable()
export class SposifyService {

  static BASE_URL = 'https://api.spotify.com/v1';

  constructor(private http: Http) { }

  query(
    URL: string,
    params?: Array<string>
  ): Observable<any[]> {
    let queryURL = `${SposifyService.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join('&')}`;
    }
    const apiKey = environment.SpotifyAPIKey;
    const headers = new Headers({
      Authorization: `Bearer ${apiKey}`
    });
    const options = new RequestOptions({
      headers: headers
    });

    return this.http
      .request(queryURL, options).pipe(
        map((res: any) => res.json())
      );

  }

  search(query: string, type: string): Observable<any[]> {
    return this.query(`/search`, [
      `q=${query}`,
      `type=${type}`
    ]);
  }

  public searchTrack(query: string): Observable<any[]> {
    return this.search(query, 'track');
  }

}

