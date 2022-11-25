import { Component } from '@angular/core';
import { MoviePreview } from '../../models';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchString: string = 'pokemon';
  movieSearchResult?: MoviePreview[];

  constructor(private moviesService: MoviesService) {}

  search(): void {
    console.log(this.searchString);
    this.moviesService.search(this.searchString).subscribe({
      next: (data) => {
        console.log(data);
        this.movieSearchResult = this.castPreview(data);
      },
      error: (e) => console.error(e),
    });
  }

  castPreview(data: any): MoviePreview[] {
    let result: MoviePreview[] = [];

    data.forEach((element: any) => {
      const preview: MoviePreview = {
        id: element.id,
        title: element.title,
        posterPath: `https://image.tmdb.org/t/p/w500${element.poster_path}`,
        releaseDate: new Date(element.release_date),
        voteAverage: element.vote_average,
      };
      result.push(preview);
    });

    return result;
  }
}
