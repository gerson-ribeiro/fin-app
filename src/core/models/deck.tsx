import Card from "./card";

class Deck {
    public cards!: Array<{ card:Card, amount: number }>;
    public format?: string;
    public name!: string;
    public date!: Date;
}
export default Deck;