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
      .pipe(map((data) => data.results));
  }

  //   add(slug, payload): Observable<Comment> {
  //     return this.apiService
  //       .post(`/articles/${slug}/comments`, { comment: { body: payload } })
  //       .pipe(map((data) => data.comment));
  //   }

  //   getAll(slug): Observable<Comment[]> {
  //     return this.apiService
  //       .get(`/articles/${slug}/comments`)
  //       .pipe(map((data) => data.comments));
  //   }

  //   destroy(commentId, articleSlug) {
  //     return this.apiService.delete(
  //       `/articles/${articleSlug}/comments/${commentId}`
  //     );
  //   }
}
