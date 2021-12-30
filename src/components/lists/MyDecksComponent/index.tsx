import { Text } from "react-native";
import React from "react";
import { Container, Search } from "../listCardsComponent/styles";
import { ListDeck, ListDeckView } from "./styles";
import { useState } from "react";

const MyDecksComponent = () => {
    const [decks, setDecks] = useState(new Array<string>());
    const [deckName, setDeckName] = useState("");
    const [loading, setLoading] = useState(false);

    const onChangeText = (value: any) => {
        setDeckName(value);
    };

    return (
        <Container>
            <Search onChangeText={onChangeText} />
            { !loading ? (
                <ListDeckView>
                    <ListDeck<React.ElementType>
                        data={decks}
                        renderItem={({ item }: any) => {
                            <Text>{item}</Text>;
                        }}
                    />
                </ListDeckView>
            ):(
                <Text>Carregando...</Text>
            )}
        </Container>
    );
};
export default MyDecksComponent;
