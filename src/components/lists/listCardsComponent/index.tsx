import { useState } from "react";
import React from "react";
import CardController from "../../../core/controllers/CardController";
import Card from "../../../core/models/card";
import { Container,  Loading, Search } from "./styles";
import ListCardAdapter from "../../adapters/ListCardAdapter";
import ListCardViewComponent from "../../../shared/components/ListCardsViewComponent";

const cards_res = new CardController();

export const ListCardComponent: React.FC<any> = (props) => {
    const [cards, setListCards] = useState(new Array<Card>());
    const [card, setCard] = useState(new Card());
    const [loading, setLoading] = useState(false);
    const { navigation } = props;

    const getCards = () => {
        setLoading(true);
        cards_res
            .get(card)
            .then(({ data }) => setListCards(data.cards))
            .catch(() => setListCards(new Array<Card>()))
            .finally(() => setLoading(false));
    };

    const onChangeCardName = (value: any) => {
        card.name = value;
        if (value == "") {
            setCard(new Card());
        } else {
            setCard(card);
        }
        setLoading(true);
        setTimeout(() => getCards(), 3000);
    };

    React.useEffect(() => {
        if (card.name) getCards();
    }, [card]);

    return (
        <Container>
            <Search onChangeText={onChangeCardName} />
            {loading ? (
                <Loading>Carregando...</Loading>
            ) : (
                <ListCardViewComponent cards={cards} navigation={navigation} />
            )}
        </Container>
    );
};
