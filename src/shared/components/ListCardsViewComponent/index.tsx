import React from "react";
import ListCardAdapter from "../../../components/adapters/ListCardAdapter";
import ListCardAmountAdapter from "../../../components/adapters/ListCardAmountAdapter";
import Card from "../../../core/models/card";
import { ListCard, ListCardView } from "./styles";

interface IListCardViewProps {
    cards?: Array<Card>;
    deckList?: Array<{ card: Card; amount: number }>;
    navigation: any;
}

const ListCardViewComponent: React.FC<IListCardViewProps> = ({
    deckList,
    cards,
    navigation,
}) => {
    const onChangeAmount = (amount: any) => {
        console.log("quantidade",amount);        
    };

    return (
        <ListCardView>
            {cards && (
                <ListCard>
                    {cards.map((card, index) => (
                        <ListCardAdapter
                            key={index}
                            navigation={navigation}
                            card={card}
                        />
                    ))}
                </ListCard>
            )}
            {deckList && (
                <ListCard>
                    {deckList.map(({ card, amount }, index) => (
                        <ListCardAmountAdapter
                            key={index}
                            navigation={navigation}
                            card={card}
                            amount={amount}
                            callback={onChangeAmount}
                        />
                    ))}
                </ListCard>
            )}
        </ListCardView>
    );
};
export default ListCardViewComponent;
