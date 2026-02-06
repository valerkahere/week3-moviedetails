import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root', // can access the service throughout the whole application
})
export class Movieservice {

  private _movies=signal([
    {"title": "Inception", "year": 2010, "director": "Christopher Nolan"},
    {"title": "The Shawshank Redemption", "year": 1994, "director": "Frank Darabont"},
    {"title": "The Dark Knight", "year": 2008, "director": "Christopher Nolan"},
    {"title": "Pulp Fiction", "year": 1994, "director": "Quentin Tarantino"},
    {"title": "Spirited Away", "year": 2001, "director": "Hayao Miyazaki"},
    {"title": "The Godfather", "year": 1972, "director": "Francis Ford Coppola"}
  ]);

  public movies = this._movies.asReadonly();

  private _favourites = signal<string[]>([]);

  public favourites = this._favourites.asReadonly();

  public delFav(index:number) {
    this._favourites.update(_favourites =>
        _favourites.filter((_, i) => i !== index)
    );
  }

  public addFav(m:string) {
    this._favourites.update(current => [...current, m]);
  }
}
