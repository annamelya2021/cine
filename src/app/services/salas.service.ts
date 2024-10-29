
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalasService {
  private apiUrl = 'assets/salas.json';

  constructor(private http: HttpClient) {}

  getHalls(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
