export default class Utils {
    static generatePlayerId(name: string) {
        return Math.floor(Math.random() * Date.now());
    }

    static generateGameId() {

    }

    static hash(text: string) {
        return text.split('').reduce((a,b) => (((a << 5) - a) + b.charCodeAt(0))|0, 0);
    }

}
