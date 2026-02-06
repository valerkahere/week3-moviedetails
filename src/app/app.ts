import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Movieservice } from './services/movieservice';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fav-movies');

  protected movieService = inject(Movieservice);
}
