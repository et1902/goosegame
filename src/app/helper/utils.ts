export default class Utils {
    static generatePlayerId(name: string) {
        return Math.floor(Math.random() * this.hash(name));
    }

    static generateGameId() {
        return Math.floor(Math.random() * Date.now());
    }

    static hash(text: string) {
        var hash = text.split('').reduce((a,b) => (((a << 5) - a) + b.charCodeAt(0))|0, 0);
        if (hash < 0) {
            return Math.imul(-1, hash)
        }
        return hash
    }

}
