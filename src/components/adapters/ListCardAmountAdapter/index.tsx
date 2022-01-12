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
    navigation: any;
    amount: number;
    callback: (newValue:number)=> void;
}
const ListCardAmountAdapter: React.FC<IListCardAmountProps> = (props) => {
    const { card, navigation, amount, callback } = props;
    const [ new_amount, setAmount] = useState(amount)
    const avancar = () => {
        navigation.navigate("CardView", { card: card });
    };

    useEffect(() => {
        callback(new_amount)
    }, [new_amount])
    return (
        <Container>
            <ClickMe onPress={() => avancar()}>
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
