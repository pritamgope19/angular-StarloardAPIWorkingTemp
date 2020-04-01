import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import{ Movie } from '../Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input('searchValue') searchValue: String ="";

  constructor(private _movie: MovieService) { }
  movies:Movie[] =  [];
  ngOnInit() {
    this._movie.getMovies().subscribe(
      (data) => {
        //this.movies = data;
        setTimeout(()=>{
          data.filter((movie)=> movie.movie_title.includes(this.searchValue.toString()) )
          .map((movie)=>{
            this.movies.push(movie);
          })
        },1000);
      }  
    )
  }
  
  

}

