import { Injectable } from '@angular/core';
import { MovieList } from 'app/interface/movielist';


@Injectable()
export class MovieService {

  movieList: MovieList[] = [];

  /** Add movie in the array List. */
  addMovie(movieDetail: MovieList) {
    this.movieList.unshift(movieDetail);
  }

  /**Get the movie list from the array. */
  getMovie(): movieList[] {
    return this.movieList;
  }


}
