import { Component } from '@angular/core';

@Component({
  selector: 'app-game-gameboard',
  templateUrl: './gameboard.component.html',
  styles: [],
})
export class GameboardComponent
{
    public gamefields = [];

    constructor()
    {
        for(var i = 0; i < 10; ++i)
        {
          this.gamefields.push({id: i, description: null ,action: null})
        }
    }
}