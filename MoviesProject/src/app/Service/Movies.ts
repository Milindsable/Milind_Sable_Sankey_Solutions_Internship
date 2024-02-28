export interface Movie
{
    id: number,
    title: string,
    releaseYear:string
}

export interface MoviesResponse {
    title: string;
    description: string;
    movies: Movie[];
  }
  