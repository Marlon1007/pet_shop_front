import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../auth/services/auth.service';

export interface Breed {
  id: number;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class BreedService {
  private readonly http = inject(HttpClient);
  private readonly authService = inject(AuthService);
  private readonly url = `${environment.apiUrl}/breed`;

  private get headers(): HttpHeaders {
    return new HttpHeaders({ Authorization: `Bearer ${this.authService.getToken() ?? ''}` });
  }

  getBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(this.url, { headers: this.headers });
  }

  saveBreed(name: string): Observable<Breed> {
    return this.http.post<Breed>(this.url, { name }, { headers: this.headers });
  }

  updateBreed(id: number, name: string): Observable<Breed> {
    return this.http.put<Breed>(`${this.url}/${id}`, { name }, { headers: this.headers });
  }

  deleteBreed(id: number): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(`${this.url}/${id}`, { headers: this.headers });
  }
}
