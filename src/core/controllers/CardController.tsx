import Card from "../models/card";
import axios from 'axios';

class CardController {
    url: string;
    constructor() {
        this.url = 'https://api.magicthegathering.io/v1/cards';
        
    }
    get(card: Card): Promise<any>{
        console.log('getting...');
        
        return axios.get(this.url,{
            params:{ name: card.name }
        });
    }
    post(card: Card): Promise<any>{
        return axios.get(this.url,{
            params: card
        });
    }
}

export default CardController;