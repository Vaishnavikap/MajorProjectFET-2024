import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongUploadService {

  constructor(private http: HttpClient) { }

  uploadSong(formData: FormData): Observable<any> {
    return this.http.post("http://localhost:3000/song", formData);
  }
 
}
