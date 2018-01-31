import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Program } from './program';

@Injectable()
export class ApiService {
  constructor (
    private http: Http
  ) {}

  getData(): Observable<Program[]> {
    return this.http.get(`https://api.myjson.com/bins/5bdb3`)
    .map((res:Response) => res.json());
  }

  getMore(): Observable<Program[]> {
    return this.http.get(`https://api.myjson.com/bins/47axv`)
    .map((res:Response) => res.json());
  }

}
