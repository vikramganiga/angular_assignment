import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Inject } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import { map } from 'rxjs';
import { BadInput } from './../common/bad-input';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {

  constructor(@Inject(String) private url: string, private http: Http) { }

  getAll(){
    return this.http.get(this.url)
    .pipe(map((response: any) => response.json())).pipe(catch());
  }

  private handleError(error: Response){
    if(error.status === 400)
      return Observable.throw(new BadInputs)
  }
}
