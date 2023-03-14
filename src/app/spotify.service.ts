import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  getHeader(query: string) {
    const url = 'https://api.spotify.com/v1/' + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      // tslint:disable-next-line: max-line-length
      "Bearer BQAhRBYtqhngtx6yVoHtRz3mcUMj23mjgfn9SENmwuKMUpgG31cPIlJJvaX9Ph2WoJhk_oBYtpVgAYkm_gtegXH661XYOMwwBuwmx5y9T_kL2b0u9ieFq_lLQ6yInm2xEWUsOVumMT1n6eMTdXDQV2X2KWpYHu3AYe8f67ZzMRuEkqLJhCVysB-mlryhLPpX"
      );
    return this._http.get(url, { headers });
  }
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {}

  searchMusic(str: string, type = 'artist') {
    const param = '&offset=0' + '&limit=20' + '&type=' + type + '&market=US';
    const query = 'search?query=' + str + param;
    return this.getHeader(query);
  }
  getArtist(id: string) : any{
    const query = `artists/${id}`;
    return this.getArtist(query);
  }
}
