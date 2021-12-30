import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin:10px 0px;
`;
export const ClickMe = styled.TouchableOpacity`
    width:100%;
`;
export const CardImage = styled.Image`
    position:absolute;
    height: 65px;
    width: 45px;
    align-self: flex-start;
`;
export const CardInfo = styled.View`
    display: flex;
    align-self: flex-end;
`;
export const CardName = styled.Text`
    text-align: right;
    font-size:14px;
`;
export const CardEdition = styled.Text`

`;
export const CardType = styled.Text`
    text-align: right;
    color: gray;
    font-size:12px;
`;
