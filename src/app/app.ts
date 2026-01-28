import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fav-movies');

  protected movies = signal(
    [
        'Inception',
        'The Shawshank Redemption',
        'The Dark Knight',
        'Pulp Function',
        'Spirited Away',
        'The Godfather'
    ]
  );

  protected favourites = signal(
    []
  );

  // Need the selected movies content
  // passing the actual movie string
  // how to get the current movie's by index from array?
  protected favMovie(m:string) {
    this.favourites.update(current => [...current, ]);

    // this.favourites.push(this.movies[index]);



    // this.favourites.update(favourites =>
    //     favourites.filter((_, i) => i === index)
    // );
    // this.movies.update(current => [...current, m]);
  }

  protected deleteMovie(m:number) {

  }
}
