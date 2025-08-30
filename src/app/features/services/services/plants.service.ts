import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {
  private apiUrl = 'https://api.unsplash.com/search/photos';
  private clientId = 'VJOdWtGdRl7HWm-U2WkSuKN9RjqkzfjnQ9byb-rGBdA';

  constructor(private http: HttpClient) {}

  getPlants(page: number = 1): Observable<any> {
    const params = {
      query: 'indoor plants',
      page: page.toString(),
      per_page: '20',
      client_id: this.clientId
    };
    
    return this.http.get<any>(this.apiUrl, { params });
  }
}
