import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Propostion } from './proposition';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropositionService {

  private baseURL = "http://localhost:8080/localExplorer/propositions";

  constructor(private httpClient: HttpClient) { }

  getPropositionsList(): Observable<Propostion[]>{
    return this.httpClient.get<Propostion[]>(`${this.baseURL}`);
  }
  getPropositionsListByUserId(id:number):Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseURL}/${id}`);
  }
}
