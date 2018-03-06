import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
/*
  Generated class for the ProgramProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProgramProvider {
api_url = environment.site_url+environment.program_url;
pitaj_url = environment.site_url + environment.pitanje_url;
favorite_url = environment.site_url + environment.sudionici_url;
predavaci_url = environment.site_url + environment.predavac_url
  constructor(public http: HttpClient) {
    console.log('Hello ProgramProvider Provider');
  }
  getPrograms() {
  	return this.http.get(this.api_url);
      
  }


postPitanje(predavac, pitanje_za_predavaca, autor) {
 let data = {
 	title: 'Pitanje za predavača - ' + predavac,
 	pitanje: pitanje_za_predavaca,
 	autor: autor

 };
 let token = JSON.parse(localStorage.getItem('wpToken')).token;
 console.log(token);
 
 let headers = new HttpHeaders({
 	'Content-Type':'application/json',
 	'Authorization': `Bearer ${token}`
 });

    return this.http.post(this.pitaj_url, data, {headers: headers});
}

getUser() {
     return this.http.get(this.favorite_url);
}
getPredavaci() {
     return this.http.get(this.predavaci_url);
}
}
