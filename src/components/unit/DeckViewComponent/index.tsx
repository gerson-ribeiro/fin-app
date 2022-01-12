import React from "react";
import ListCardViewComponent from "../../../shared/components/ListCardsViewComponent";
import { Container, DeckFormat, DeckName } from "./styles";

const DeckViewComponent: React.FC<any> = ({deck, navigation}) => {

    return (
        <Container>
            <DeckName>{deck.name}</DeckName>
            <DeckFormat>{deck.format}</DeckFormat>
            <ListCardViewComponent navigation={navigation} cards={deck.cards}/>
        </Container>
    );
};
export default DeckViewComponent;
