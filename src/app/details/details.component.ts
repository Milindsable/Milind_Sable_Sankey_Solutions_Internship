import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesDataService } from '../Service/MovieDataService';
import { Movie } from '../Service/Movies';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute)
  id = 0;
  moviesData: Movie[] = [];

  constructor(moviesdataservice:MoviesDataService)
  {
    this.id = Number(this.route.snapshot.params['id']);

    moviesdataservice.getMovies().subscribe(response => 
      {
        this.moviesData = response.movies.filter(movie => movie.id == this.id) || [];
        console.log(this.moviesData);
      });
  }
}
