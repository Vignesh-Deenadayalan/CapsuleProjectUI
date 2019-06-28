import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Create } from './create';



@Injectable()
export class CreateService {
  url = 'http://localhost:8080';  // URL to web api
   rowData:any=1;

  constructor(private http: HttpClient){}

  getHeroes (): Observable<Create[]> {
    return this.http.get<Create[]>(this.url+'/view',
    { headers:new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Origin': '*'})}
    );
  }

  
  getTask (id:number): Observable<Create> {
    const newurl=this.url+'/id'
    const url = `${newurl}/${id}`;
    return this.http.get<Create>(url,
    { headers:new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Origin': '*'})}
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the database */
  addTitle (hero: Create): Observable<Create> {
    return this.http.post<Create>(this.url +'/create', hero,
     { headers:new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Origin': '*'})}
     );
  }

  /** DELETE: delete the hero from the server */
  deleteId (id: number): Observable<{}> {
    const newurl=this.url+'/delete'+'/id'
    const url = `${newurl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url,
      { headers:new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Origin': '*'})}
      );
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  updateTitle (hero: Create): Observable<Create> {

    return this.http.put<Create>(this.url +'/modify', hero,
    { headers:new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Origin': '*'})})
     ;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/