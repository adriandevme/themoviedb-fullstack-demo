import { Component, OnInit } from '@angular/core';
import { MovieDetail } from '../models';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  movieDetail?: MovieDetail;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getMovieDetail();
  }

  getMovieDetail(): void {
    this.moviesService.get('447404').subscribe({
      next: (data) => {
        this.movieDetail = this.castDetail(data);
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  //@WARNING toDelete
  castDetail(data: any): MovieDetail {
    const detail: MovieDetail = {
      id: data.id,
      title: data.title,
      posterPath: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
      releaseDate: new Date(data.release_date),
      voteAverage: data.vote_average,
      //Extra
      overview: data.overview,
      tagline: data.tagline,
      revenue: data.revenue,
      runtime: data.runtime,
    };
    return detail;
  }
}
