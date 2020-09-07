import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'tik-tak-tue';

  countOfGameStartPlayer = 1;
  gameMatrix =
    [ 0, 0, 0,
      0, 0, 0,
      0, 0, 0,
    ]

    printGame() {
      console.log();

    }
}
