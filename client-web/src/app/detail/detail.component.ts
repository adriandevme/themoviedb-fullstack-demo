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
        this.movieDetail = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
}
