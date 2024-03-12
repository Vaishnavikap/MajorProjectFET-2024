// song.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  private apiUrl = 'http://localhost:3000/getsong';

  constructor(private http: HttpClient) {}

  getSongs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getSongById(id: string): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/getSongById/${id}`);
  }

  getArtists(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

 

  getSongDetails(searchTerm: string): Observable<any> {
    // Append the search term to the API endpoint
    const url = `${this.apiUrl}?search=${searchTerm}`;
    return this.http.get(url);
  }
  fetchAudio(audioUrl: string): Observable<Blob> {
    return this.http.get(audioUrl, { responseType: 'blob' });
  }
}
