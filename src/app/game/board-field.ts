export class BoardField {
    private position: number;
    
    constructor(position: number) {
        this.position = position
    }

    public getPosition() {
        return this.position;
    }
}
