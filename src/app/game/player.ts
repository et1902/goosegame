import Utils from '../helper/utils';

export class Player {
    private playerId: number;
    private playerName: string = "unnamed";

    constructor(values: Object = {}) {
        Object.assign(this,values);
        this.playerId = this.generatePlayerId();
    }

    private generatePlayerId () {
        //Not totaly random but good enough
        let id =  Utils.generatePlayerId(this.playerName);
        console.log("Generated Id for Player: " + this.getPlayerName + " ID: " + id)
        return id;
    }

    public getPlayerId() {
        return this.playerId;
    }

    public getPlayerName() {
        return this.playerName;
    }

    public setPlayerName(newName: string) {
        console.log("setPlayerName() from: " + this.playerName + "to: " + newName);
        this.playerName = newName;
    }
}
