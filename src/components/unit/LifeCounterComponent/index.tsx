import { Text } from "react-native";
import React, { useEffect, useState } from "react";
import OkSVG from "../../../../assets/done_black_24dp.svg";
import {
    ApplyEnemyLife,
    ApplyMyLife,
    ButtonGroup,
    Container,
    EnemyAddLife,
    EnemyDeck,
    EnemyLastLife,
    EnemyLife,
    EnemyName,
    EnemyRemoveLife,
    EnemyView,
    MyAddLife,
    MyDeck,
    MyLastLife,
    MyLife,
    MyName,
    MyRemoveLife,
    MyView,
    TempLife,
} from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const LifeCounterComponent = () => {
    const [enemyHistoryLife, setEHistoryLife] = useState(new Array<number>());
    const [myHistoryLife, setMyHistoryLife] = useState(new Array<number>());
    const [lastEnemyLife, setLastEnemyLife] = useState(20);
    const [lastLife, setLastLife] = useState(20);
    const [tempEnemyLife, setTempEnemyLife] = useState(20);
    const [tempLife, setTempLife] = useState(20);

    useEffect(() => {
        setEHistoryLife((oldEnemyHistoryLife) => [
            ...oldEnemyHistoryLife,
            lastEnemyLife,
        ]);
    }, [lastEnemyLife]);

    useEffect(() => {
        setMyHistoryLife((oldMyHistoryLife) => [...oldMyHistoryLife, lastLife]);
    }, [lastLife]);

    return (
        <Container>
            {/* <TouchableOpacity onPress={()=> {
                setEHistoryLife(new Array<number>())
                setMyHistoryLife(new Array<number>())
            }}>
                <Text>Reset</Text>
            </TouchableOpacity> */}
            <EnemyView>
                <EnemyName placeholder="Nome do Oponente" />
                <EnemyDeck placeholder="Deck do Oponente" />

                {enemyHistoryLife.map((life, index) =>
                    index + 1 != enemyHistoryLife.length ? (
                        <EnemyLife>{life}</EnemyLife>
                    ) : (
                        <EnemyLastLife>{life}</EnemyLastLife>
                    )
                )}
                <TempLife>{tempEnemyLife}</TempLife>
                <ButtonGroup>
                    <EnemyAddLife
                        onPress={() => {
                            setTempEnemyLife(tempEnemyLife + 1);
                        }}
                    >
                        <Text>+</Text>
                    </EnemyAddLife>
                    <ApplyEnemyLife
                        onPress={() => {
                            setLastEnemyLife(tempEnemyLife);
                        }}
                    >
                        <OkSVG />
                    </ApplyEnemyLife>
                    <EnemyRemoveLife
                        onPress={() => {
                            setTempEnemyLife(tempEnemyLife - 1);
                        }}
                    >
                        <Text>-</Text>
                    </EnemyRemoveLife>
                </ButtonGroup>
            </EnemyView>
            <MyView>
                <MyName placeholder="Meu Nome" />
                <MyDeck placeholder="Meu Deck" />

                {myHistoryLife.map((life, index) =>
                    index + 1 != myHistoryLife.length ? (
                        <MyLife>{life}</MyLife>
                    ) : (
                        <MyLastLife>{life}</MyLastLife>
                    )
                )}
                <TempLife>{tempLife}</TempLife>
                <ButtonGroup>
                    <MyAddLife
                        onPress={() => {
                            setTempLife(tempLife + 1);
                        }}
                    >
                        <Text>+</Text>
                    </MyAddLife>
                    <ApplyMyLife
                        onPress={() => {
                            setLastLife(tempLife);
                        }}
                    >
                        <OkSVG />
                    </ApplyMyLife>
                    <MyRemoveLife
                        onPress={() => {
                            setTempLife(tempLife - 1);
                        }}
                    >
                        <Text>-</Text>
                    </MyRemoveLife>
                </ButtonGroup>
            </MyView>
        </Container>
    );
};
export default LifeCounterComponent;
