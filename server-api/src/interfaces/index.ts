export interface IMoviePreview {
  id?: number;
  title?: string;
  posterPath?: string;
  releaseDate?: Date;
  voteAverage?: number;
}

export interface IMovieDetail {
  id?: number;
  title?: string;
  posterPath?: string;
  releaseDate?: Date;
  voteAverage?: number;
  //Extra
  overview?: string;
  tagline?: string;
  revenue?: number;
  runtime?: number;
}
