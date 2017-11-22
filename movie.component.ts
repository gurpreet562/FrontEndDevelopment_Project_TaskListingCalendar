import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { MovieService } from 'app/services/movie.service';
import { MovieList } from './interface/movielist';

@Component({
  selector: 'app-root',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [MovieService]
})

export class AppComponent implements OnInit {
  /**Public variable */
  moviesArray: MovieList[] = [];
  

  
  movieDetail: MovieList;

 
  constructor(private _movieService: MovieService) { }

  ngOnInit() {
    this.movieModel = {
      movieName: '',
      movieDescription: '',
      releaseDate: '',
      rating: '',
	  movieURL:''
    };

    
  }

  /**Add a movie */
  addCriketer(values) {
    // values : {
    //   movieName: ""
    //   movieDescription: ""
    //   releaseDate: ""
    //   rating: ""
	     movieURL: ""
    // }
    this.movieDetail = {
      movieName: values.movieName,
      movieDescription: values.movieDescription,
      releaseDate: values.releaseDate,
      rating: values.rating,
	  movieURL:values.movieURL
    };
    // /**Call function from service. */
    this._movieService.addMovie(this.movieDetail);
    // Using 3rd party library to show message.
    alertify.notify('Movie  Added Successfully', 'success', 3);

    this.moviesArray = this._movieService.getMovie();
  };

   

}
