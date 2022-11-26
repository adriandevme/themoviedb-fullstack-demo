import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MovieDetail } from '../../models';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  movieDetail?: MovieDetail;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.params['id'];
    this.getMovieDetail(movieId);
  }

  getMovieDetail(movieId: string): void {
    this.moviesService.get(movieId).subscribe({
      next: (data) => {
        console.log(data);
        this.movieDetail = data as MovieDetail;
      },
      error: (e) => console.error(e),
    });
  }
}
