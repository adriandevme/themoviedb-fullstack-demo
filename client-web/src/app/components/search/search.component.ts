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
  searchStr: string = 'pokemon';

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

  // getTopRatedMovies(page: number) {
  //   this.movieService
  //     .getTopRatedMovies(page)
  //     .pipe(delay(2000))
  //     .subscribe(
  //       (res: any) => {
  //         this.topRated = res.results;
  //         this.totalResults = res.total_results;
  //         this.loader = false;
  //       },
  //       (error) => console.log(error)
  //     );
  // }

  // changePage(event: any) {
  //   this.loader = true;
  //   this.getTopRatedMovies(event.pageIndex + 1);
  // }

  searchMovies() {
    console.log('searching movies...');
    this.movieService.search(this.searchStr).subscribe((res) => {
      this.searchRes = res;
      this.loader = false;
      console.log(this.searchRes);
    });
  }
}
