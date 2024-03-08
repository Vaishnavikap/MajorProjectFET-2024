import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  private apiUrl = 'http://localhost:3000';

  playlists: any[] = [];

  constructor(private http: HttpClient) {}

  addPlaylist(name: string, songs: any[]): void {
    // Local addition
    this.playlists.push({ name, songs });

    // API addition
    const playlistData = { name, songs };
    this.createPlaylist(playlistData).subscribe(
      (response) => {
        console.log('Playlist created successfully:', response);
        // You can handle additional actions on successful creation
      },
      (error) => {
        console.error('Error creating playlist:', error);
        // Handle error, maybe remove the local addition as well
      }
    );
  }

  getPlaylists(): Observable<any[]> {
    // API fetching
    const url = `${this.apiUrl}/playlists`; // Correct endpoint URL
    return this.http.get<any[]>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching playlists:', error);
        return throwError('Something went wrong while fetching playlists.');
      })
    );
  }

  private createPlaylist(playlistData: any): Observable<any> {
    const url = `${this.apiUrl}/playlist`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, playlistData, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error creating playlist:', error);
        return throwError('Something went wrong while creating the playlist.');
      })
    );
  }

  getPlaylistById(playlistId: number): Observable<any> {
    const url = `${this.apiUrl}/playlist/${playlistId}`;
    return this.http.get<any>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching playlist by ID:', error);
        return throwError('Something went wrong while fetching the playlist.');
      })
    );
  }

  getArtistSongs(artist: string): Observable<any[]> {
    const url = `${this.apiUrl}/getSongByArtist/${artist}`;
    return this.http.get<any[]>(url);
  }
  
  
}
