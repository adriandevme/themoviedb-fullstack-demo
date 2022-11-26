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
        this.movieSearchResult = data as MoviePreview[];
      },
      error: (e) => console.error(e),
    });
  }
}
