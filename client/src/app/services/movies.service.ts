import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { MovieDetail, MoviePreview } from '../models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private apiService: ApiService) {}

  get(slug: string): Observable<MovieDetail> {
    return this.apiService.get(`/movie/${slug}`).pipe(map((data) => data));
  }
  search(slug: string): Observable<MoviePreview[]> {
    return this.apiService
      .get(`/movie/search/${slug}`)
      .pipe(map((data) => data));
  }
}
