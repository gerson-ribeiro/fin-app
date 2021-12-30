import React from "react";
import Card from "../../../core/models/card";
import {
    CardImage,
    CardInfo,
    CardName,
    CardType,
    ClickMe,
    Container,
} from "./styles";

interface ListCardAdapterProps {
    card: Card;
}

const ListCardAdapter: React.FC<ListCardAdapterProps> = ({ card }) => {
    return (
        <Container>
            <ClickMe onPress={()=> console.log("cardname", card.name)}>
                <CardImage source={{ uri: card.imageUrl }}></CardImage>
                <CardInfo>
                    <CardName>{card.name}</CardName>
                    <CardType>{card.type}</CardType>
                </CardInfo>
            </ClickMe>
        </Container>
    );
};
export default ListCardAdapter;
