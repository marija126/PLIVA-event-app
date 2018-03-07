import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';

/*
  Generated class for the AktualnoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AktualnoProvider {

api_url = environment.site_url+environment.aktualno_url;
  constructor(public http: HttpClient) {
    console.log('Hello AktualnoProvider Provider');
  }
  getAktualno() {
  	return this.http.get(this.api_url);
  }

postAktualno(title, content, autor, slika) {
 let data = {
 	title: 'Post aktualno',
 	post_tekst: content,
 	autor: autor,
  aktualno_slika: slika

 };

 let token = JSON.parse(localStorage.getItem('wpToken')).token;
 console.log(token);
 let headers = new HttpHeaders({
 	'Content-Type':'application/json',
 	'Authorization': `Bearer ${token}`
 });

    return this.http.post(this.api_url, data, {headers: headers});
}

}
