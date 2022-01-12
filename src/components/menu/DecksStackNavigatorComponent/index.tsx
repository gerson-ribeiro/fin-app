import { DrawerToggleButton } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useLayoutEffect } from "react";
import MyDecksComponent from "../../lists/MyDecksComponent";
import DeckEditComponent from "../../unit/DeckEditComponent";
import DeckViewComponent from "../../unit/DeckViewComponent";

const Stack = createStackNavigator();

const DecksStackNavigatorComponent: React.FC<any> = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen
                name="MyDecks"
                component={MyDecksComponent}
                options={{
                    title:"Meus Decks",
                    headerLeft: () => (
                        <DrawerToggleButton
                            pressOpacity={navigation.toggleDrawer}
                        />
                    ),
                }}
            />
            <Stack.Screen name="DeckView" component={DeckViewComponent} />
            <Stack.Screen name="DeckEdit" component={DeckEditComponent} />
        </Stack.Navigator>
    );
};

export default DecksStackNavigatorComponent;
