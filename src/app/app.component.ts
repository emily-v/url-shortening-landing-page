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
      this.showError();
      return;
    }
    
    this.newShortUrl();
  }

  newShortUrl() {
    let request = {};
    request['url'] = this.urlToShorten;
    let url: Url = new Url(this.urlToShorten);
    this.postUrlRequest(request)
      .subscribe(
        (resp) => {
          url.shortUrl = 'https://rel.ink/' + resp.hashid;
          this.urls.push(url);
        },
        (err) => {
          console.log('err', err)
        },
        () => {
          this.reset();
        }
      );
  }

  copyUrl(url: Url) {
    let short = url.shortUrl;
    navigator.clipboard.writeText(short);
    this.setCopied(url);
  }
  
  reset() {
    this.urlToShorten = '';
    this.clearCopied();
  }

  clearCopied() {
    this.urls.forEach(url => url.copied = false);
  }
  
  setCopied(copiedUrl) {
    this.urls.forEach(url => {
      if(url.shortUrl == copiedUrl.shortUrl) {
        url.copied = true;
      } else {
        url.copied = false;
      }
    })
  }

  showError() {
    document.querySelector('.url-input').classList.add('error-border');
    document.querySelector('.error-text').classList.remove('hide-error');
  }

  clearError() {
    document.querySelector('.url-input').classList.remove('error-border');
    document.querySelector('.error-text').classList.add('hide-error');
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

  // not in use
  getUrlInfoRequest(hash: string): Observable<any> {
    return this.http.get('https://rel.ink/api/links/' + hash);
  }

}
