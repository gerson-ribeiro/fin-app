import { FlatList } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Card from "../../../core/models/card";

export const Container = styled.KeyboardAvoidingView`
    width: 100%;
    height: 100%;
    padding:10px;
`;

export const Search = styled.TextInput`
    width: 100%;
    background-color: #ddd;
    font-size: 22px;
    margin-top: 10px;
    padding: 10px;
    border-bottom-color: black;
    border-bottom-width: 2px;
`;

export const ListCardView = styled.View`
    margin-top: 10px;
    width: 100%;
    height: 600px;
    background-color:#ddd;
`;

export const ListCard = styled(FlatList as new () => FlatList<Card>)`
    width: 100%;
    color: black;
`;

export const Loading = styled.Text``;
