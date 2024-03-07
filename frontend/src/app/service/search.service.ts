// search.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'http://localhost:3000/getsong';

  constructor(private http: HttpClient) {}

  search(query: string): Observable<any> {
    // Make a GET request to the API with the search query
    return this.http.get(`${this.apiUrl}?query=${query}`);
  }

}
