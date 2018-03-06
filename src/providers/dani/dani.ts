import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
/*
  Generated class for the ProgramProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DaniProvider {
api_url = environment.site_url+environment.dani_url;
  constructor(public http: HttpClient) {
    console.log('Hello DaniProvider Provider');
  }
  getDani() {
  	return this.http.get(this.api_url);
      
  }
}
