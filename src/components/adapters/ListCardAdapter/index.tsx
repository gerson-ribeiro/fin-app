import React from "react";
import Card from "../../../core/models/card";
import {
    CardEdition,
    CardImage,
    CardInfo,
    CardName,
    CardType,
    ClickMe,
    Container,
} from "./styles";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";

const ListCardAdapter: React.FC<any> = (props) => {
    const {card, navigation} = props;
    const avancar = () => {
        navigation.navigate("CardView", { card: card })
    };
    return (
        <Container>
            <ClickMe onPress={() => avancar()}>
                <CardImage source={{ uri: card.imageUrl }}></CardImage>
                <CardInfo>
                    <CardName>{card.name}</CardName>
                    <CardType>{card.type}</CardType>
                    <CardEdition>{card.set}</CardEdition>
                </CardInfo> 
            </ClickMe>
        </Container>
    );
};
export default ListCardAdapter;
