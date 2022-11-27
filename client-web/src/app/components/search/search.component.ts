import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { delay } from 'rxjs/internal/operators/delay';
import { MoviePreview } from 'src/app/models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  topRated: any;
  responsiveOptions;
  loader = true;
  totalResults: any;
  total_results: any;
  searchRes: MoviePreview[] = [];
  searchStr: string = '';
  searchError: boolean = false;

  constructor(private movieService: MoviesService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit() {
    this.searchMovies();
  }

  searchMovies() {
    console.log('searching movies...');
    this.searchError = false;
    this.loader = true;
    this.movieService.search(this.searchStr).subscribe({
      next: (data) => {
        this.searchRes = data;
        this.loader = false;
      },
      error: (e) => {
        console.error('Error buscando peliculas', e);
        this.searchError = true;
        this.loader = false;
      },
    });
  }
}
