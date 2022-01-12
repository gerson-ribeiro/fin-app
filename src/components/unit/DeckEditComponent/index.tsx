import React, { useEffect, useState } from "react";
import Deck from "../../../core/models/deck";
import ListCardViewComponent from "../../../shared/components/ListCardsViewComponent";
import RedFloatButtonComponent from "../../../shared/components/RedFloatButtonComponent";
import {
    CardAddButton,
    CardAddText,
    Container,
    DeckFormat,
    DeckInfo,
    DeckName,
} from "./styles";

interface IDeckEditProps {
    oldDeck: Deck;
    navigation: any;
}

const DeckEditComponent: React.FC<IDeckEditProps> = ({
    oldDeck,
    navigation,
}) => {
    const [deck, setDeck] = useState(new Deck());

    useEffect(() => {
        if (oldDeck) setDeck(oldDeck);
    });

    const saveDeck = () => {
        console.log("save Deck");
    };
    const openModalHandler = () => {
        console.log("openModalHandler");
    };

    return (
        <Container>
            <DeckInfo>
                <DeckName
                    onChangeText={(e) => {
                        deck.name = e;
                    }}
                    value={deck.name}
                    placeholder="Nome do Deck"
                    returnKeyType={"next"}
                />
                <DeckFormat
                    onChangeText={(e) => {
                        deck.format = e;
                    }}
                    value={deck.format}
                    placeholder="Formato"
                />
                <CardAddButton onPress={openModalHandler}>
                    <CardAddText>Adicionar Cards</CardAddText>
                </CardAddButton>
            </DeckInfo>
            <ListCardViewComponent
                navigation={navigation}
                cards={deck.cards?.map(({ card }) => card)}
            />
            <RedFloatButtonComponent
                callback={() => saveDeck()}
                text="Salvar"
            />
        </Container>
    );
};
export default DeckEditComponent;
