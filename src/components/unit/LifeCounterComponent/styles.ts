import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 5px;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const EnemyView = styled.View`
    width: 50%;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    padding: 5px;
`;
export const EnemyName = styled.TextInput`
    border-bottom-color: black;
    border-bottom-width: 1px;
    width: 100%;
`;
export const EnemyDeck = styled.TextInput`
    border-bottom-color: black;
    border-bottom-width: 1px;
    width: 100%;
`;
export const EnemyLife = styled.Text`
    text-decoration: underline;
    color: black;
`;
export const TempLife = styled.Text`
    color: green;
    font-size: 26px;
`;
export const EnemyLastLife = styled.Text`
    color: black;
`;
export const ButtonGroup = styled.View`
    width: 100%;
    display: flex;
    align-items: flex-start;
    align-self: flex-end;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
`;
export const EnemyAddLife = styled.TouchableOpacity`
    border-radius:3px;
    padding: 15px;
    background-color: gray;
    margin: 0;
`;
export const ApplyEnemyLife = styled.TouchableOpacity`
    border-radius:3px;
    padding: 15px;
    background-color: gray;
    margin: 0;
`;
export const EnemyRemoveLife = styled.TouchableOpacity`
    border-radius:3px;
    padding: 15px;
    background-color: gray;
    margin: 0;
`;

export const MyView = styled.View`
    width: 50%;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 5px;
`;
export const MyName = styled.TextInput`
    border-bottom-color: black;
    border-bottom-width: 1px;
    width: 100%;
`;
export const MyDeck = styled.TextInput`
    border-bottom-color: black;
    border-bottom-width: 1px;
    width: 100%;
`;
export const MyLastLife = styled.Text`
    color: black;
`;
export const MyLife = styled.Text`
    text-decoration: underline;
    color: black;
`;
export const MyAddLife = styled.TouchableOpacity`
    border-radius:3px;
    padding: 15px;
    background-color: gray;
`;
export const ApplyMyLife = styled.TouchableOpacity`
    border-radius:3px;
    padding: 15px;
    background-color: gray;
`;
export const MyRemoveLife = styled.TouchableOpacity`
    border-radius:3px;
    padding: 15px;
    background-color: gray;
`;
