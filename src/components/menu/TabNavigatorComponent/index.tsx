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
interface TabNavigationProps {
    tabs? : Array<{name: string, component:any, svg: any}>;
    headerShown?: boolean;
}

export const TabNavigatorComponent: React.FC<TabNavigationProps> = ({tabs,headerShown}) => {
    return (
        <Tab.Navigator>
            {tabs?.map(({name, component, svg})=>{
                <Tab.Screen
                    name={name}
                    component={component}
                    options={{
                        headerShown: headerShown,
                        tabBarIcon: ({ color }) => svg,
                    }}
                />
            })}
            {/* <Tab.Screen
                name="Meus Decks"
                component={MyDecksComponent}
                options={{
                    tabBarIcon: ({ color }) => <MyDecksSVG fill={color} />,
                }}
            />
            <Tab.Screen
                name="Marcador de Vida"
                component={LifeCounterComponent}
                options={{
                    tabBarIcon: ({ color }) => <LifeCounterSVG fill={color} />,
                }}
            /> */}
        </Tab.Navigator>
    );
};
