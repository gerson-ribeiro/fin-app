import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import React from 'react';


export const Container = styled.KeyboardAvoidingView`
    width: 100%;
    height:100%;
`;

export const Search = styled.TextInput`
    width: 100%;
    background-color: #ccc;
    font-size: 22px;
    margin-top: 10px;
    padding: 10px;
`;

export const ListDeckView = styled.View`
    margin-top: 10px;
    padding: 10px;
    width: 100%;
    height: 600px;
`;

export const ListDeck = styled(FlatList as new ()=> FlatList<string>)`
    width: 100%;
    color:black;
`;

