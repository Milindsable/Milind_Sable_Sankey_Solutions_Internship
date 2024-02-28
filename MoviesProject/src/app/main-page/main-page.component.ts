import { Component } from '@angular/core';
import { Movie } from '../Service/Movies';
import { MoviesDataService } from '../Service/MovieDataService';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent 
{
  moviesData: Movie[] = [];
  constructor(moviesdataservice:MoviesDataService)
  {
    moviesdataservice.getMovies().subscribe(response => 
    {
      this.moviesData = response.movies || [];
      console.log(this.moviesData);
    });
  }

}
