import React, { useEffect, useState } from "react";
import Card from "../../../core/models/card";
import {
    CardAmount,
    CardEdition,
    CardInfo,
    CardName,
    CardType,
    ClickMe,
    Container,
} from "./styles";
interface IListCardAmountProps {
    card: Card;
    amount: number;
    callback: (newValue:number)=> void;
    onCardPress: (card: Card)=> void;
}
const ListCardAmountAdapter: React.FC<IListCardAmountProps> = ({ card, amount, callback, onCardPress } ) => {
    const [ new_amount, setAmount] = useState(amount)
    useEffect(() => {
        callback(new_amount)
    }, [new_amount])
    return (
        <Container>
            <ClickMe onPress={() => onCardPress(card)}>
                <CardAmount 
                    value={amount.toString()}
                    keyboardType="numeric"
                    onChangeText={(e)=> {
                        console.log("value",e);
                        // setAmount(e)
                    }}
                />
                <CardInfo>
                    <CardName>{card.name}</CardName>
                    <CardType>{card.type}</CardType>
                    <CardEdition>{card.set}</CardEdition>
                </CardInfo>
            </ClickMe>
        </Container>
    );
};
export default ListCardAmountAdapter;
