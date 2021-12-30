import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ListCardComponent } from "../../lists/listCardsComponent";
import MyDecksComponent from "../../lists/MyDecksComponent";
import React from "react";
import LifeCounterComponent from "../../unit/LifeCounterComponent";
import { NavigationContainer } from "@react-navigation/native";
import SearchSVG from "../../../../assets/search_black_24dp.svg";
import MyDecksSVG from "../../../../assets/folder_black_24dp.svg";
import LifeCounterSVG from "../../../../assets/casino_black_24dp.svg";

const Tab = createBottomTabNavigator();

export const TabNavigatorComponent = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Buscar Cards"
                    component={ListCardComponent}
                    options={{
                        tabBarIcon: ({color}) => <SearchSVG fill={ color } />,
                    }}
                />
                <Tab.Screen
                    name="Meus Decks"
                    component={MyDecksComponent}
                    options={{
                        tabBarIcon: ({ color }) => <MyDecksSVG fill={ color }  />,
                    }}
                />
                <Tab.Screen
                    name="Marcador de Vida"
                    component={LifeCounterComponent}
                    options={{
                        tabBarIcon: ({ color }) => <LifeCounterSVG fill={ color }  />,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
