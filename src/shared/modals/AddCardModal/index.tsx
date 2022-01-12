import React, { useState } from "react";
import { View } from "react-native";
import Card from "../../../core/models/card";

import { Container, Main } from "./styles";
interface IAddCardProps{
    modalVisible: boolean;
    onRequestClose:()=>void;
    transparent?: boolean;

}
const AddCardModal: React.FC<IAddCardProps> = ({modalVisible, onRequestClose, transparent = false}) => {
    const [ card_name, setCard_name] = useState("");
    const [ listCards, setListCards ] = useState(new Array<Card>());
    return (
        <Container
            animationType="slide"
            transparent={transparent}
            visible={modalVisible}
            onRequestClose={onRequestClose}
        >
            <Main>
            </Main>
        </Container>
    );
};

export default AddCardModal;
