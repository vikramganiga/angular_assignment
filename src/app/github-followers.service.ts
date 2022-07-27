import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService extends DataService{

  constructor(http: Http) {
    super('https://api.github.com/users/vikramganiga/followers',http);
   }
}
