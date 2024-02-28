import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MoviesResponse } from "./Movies";
import { Observable, Observer } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class MoviesDataService 
{
    apiURL:string = "https://reactnative.dev/movies.json";

    constructor(private http: HttpClient){}

    getMovies():Observable<MoviesResponse>
    {
        return this.http.get<MoviesResponse>(this.apiURL);
    }
}
