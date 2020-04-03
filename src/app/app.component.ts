import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'goosegame';

  onClickNewGame()
  {
    console.log("Start new game")
  }

  onClickJoinGame()
  {
    console.log("Join game")
  }

}
