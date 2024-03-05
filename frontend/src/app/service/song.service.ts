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
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  searchSongs(title: string, artist: string, album: string): Observable<any> {
    const url = `${this.apiUrl}?title=${title}&artist=${artist}&album=${album}`;
    return this.http.get(url);
  }
}
