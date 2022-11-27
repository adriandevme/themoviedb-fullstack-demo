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
  loader: boolean = true;
  movie?: MovieDetail;
  searchError: boolean = false;

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
    console.log('getting movie detail...');
    this.searchError = false;
    this.loader = true;
    this.moviesService.get(movieId).subscribe({
      next: (data) => {
        console.log(data);
        this.movie = data as MovieDetail;
        this.loader = false;
      },
      error: (e) => {
        console.error('Error al cargar el detalle', e);
        this.searchError = true;
        this.loader = false;
      },
    });
  }
}
