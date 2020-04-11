import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-gameboard-gamefield',
  templateUrl: './gamefield.component.html',
  styles: [],
})
export class GamefieldComponent implements OnInit
{
    @Input() field;

    constructor()
    {

    }

    ngOnInit()
    {
    }
}
