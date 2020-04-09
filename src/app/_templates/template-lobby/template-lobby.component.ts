import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-lobby',
  templateUrl: './template-lobby.component.html',
  styles: []
})
export class TemplateLobbyComponent
{
    private gameID;

    constructor(private router: Router)
    {

    }

    private createGame()
    {
        //TODO: send Event to Websocket with create Game. Should return GameID
        //this.gameID = returnval;
    }

    private joinGame()
    {
        this.router.navigateByUrl('/game/' + this.gameID)
    }

    

}