import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from './model/Url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'url-shortening-landing-page';
  urlToShorten = '';
  urls: Url[] = [];
  
  
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

  submitUrl() {
    if(!this.urlToShorten || this.urlToShorten.length < 1) {
      alert('Enter a valid url to shorten');
      return;
    }
    console.log(this.urlToShorten);

    this.newShortUrl();
  }

  newShortUrl() {
    let request = {};
    request['url'] = this.urlToShorten;
    let url: Url = new Url(this.urlToShorten);
    this.postUrlRequest(request)
      .subscribe(
        (resp) => {
          console.log('resp', resp);
          url.shortUrl = 'https://rel.ink/' + resp.hashid;
          this.urls.push(url);
        },
        (err) => {
          console.log('err', err)
        }
      );
  }

  copyUrl(url: Url) {
    console.log(url);
  }


  // -- Service methods - may create service component
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  postUrlRequest(url): Observable<any> {
    return this.http.post('https://rel.ink/api/links/', JSON.stringify(url), this.httpOptions);
  }

  getUrlInfoRequest(hash: string): Observable<any> {
    return this.http.get('https://rel.ink/api/links/' + hash);
  }


}
