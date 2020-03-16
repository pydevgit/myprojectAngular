import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http:HttpClient) { }

  getAllgamelist(): Observable<any[]> {

   return this.http.get<any[]>('http://172.105.41.27/api/v1/betting_api/get_series_by_sport.php?sport_id=4');



}
}
