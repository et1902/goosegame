import Utils from '../helper/utils';
import { stringify } from 'querystring';
/**
 * A basic player.
 * Should only be generated by the PlayerBuilder
 */
export class Player {
    private playerId: number;
    private playerName: string = "default";
    public readonly MAXIMUNG_NAME_LENGTH: number = 18;

    constructor(name: string, id: number) {
        this.setPlayerName(name);
        this.playerId = id;
    }

    public getPlayerId() {
        return this.playerId;
    }

    public getPlayerName() {
        return this.playerName;
    }

    public setPlayerName(newName: string) {
        if (newName.length > this.MAXIMUNG_NAME_LENGTH) {
            console.error( "Name (" + newName + ") to long. Should be smaller than " + this.MAXIMUNG_NAME_LENGTH);
            return this;
        }
        this.playerName = newName;
        return this;
    }
}
