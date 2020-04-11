import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-gameboard',
  templateUrl: './gameboard.component.html',
  styles: [],
})
export class GameboardComponent
{
    @Input() gameboard;
    
    constructor()
    {
      
    }
}