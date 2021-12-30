import { useState } from "react";
import React from "react";
import { ScrollView, Text } from "react-native";
import CardController from "../../../core/controllers/CardController";
import Card from "../../../core/models/card";
import { Container, ListCard, ListCardView, Loading, Search } from "./styles";
import ListCardAdapter from "../../adapters/ListCardAdapter";

interface ListCardProps {}

const cards_res = new CardController();

export const ListCardComponent: React.FC<ListCardProps> = () => {
    const [cards, setListCards] = useState(new Array<Card>());
    const [card, setCard] = useState(new Card());
    const [loading, setLoading] = useState(false);

    const getCards = () => {
        setLoading(true);
        cards_res
            .get(card)
            .then(({ data }) => {
                console.log(data.cards);
                setListCards(data.cards);
            })
            .catch(() => {
                setListCards(new Array<Card>());
            })
            .finally(() => setLoading(false));
    };

    const onChangeCardName = (value: any) => {
        console.log("value", value);
        card.name = value;
        if(value == ""){
            setCard(new Card())
        }else{
            setCard(card);
        }
        setLoading(true);
        setTimeout(() => getCards(), 3000);
    };

    React.useEffect(() => {
        if(card.name) getCards();
    }, []);

    return (
        <Container>
            <Search onChangeText={onChangeCardName} />
            {loading ? (
                <Loading>Carregando...</Loading>
            ) : (
                <ListCardView>
                    {cards.length > 0 ? (
                        <ListCard<React.ElementType>
                            data={cards}
                            renderItem={({ item }: any) => <ListCardAdapter card={item} />}
                        ></ListCard>
                    ) : (
                        <Loading>Escreva o nome da carta acima!</Loading>
                    )}
                </ListCardView>
            )}
        </Container>
    );
};
