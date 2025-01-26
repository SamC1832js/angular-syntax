import { Injectable } from '@angular/core';
import { Mod } from '../mod/models/mod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const MOD_API = 'http://localhost:3000/mod';
@Injectable({
  providedIn: 'root',
})
export class ModService {
  constructor(private http: HttpClient) {}

  getMods(): Observable<Mod[]> {
    return this.http.get<Mod[]>(MOD_API);
  }
}
