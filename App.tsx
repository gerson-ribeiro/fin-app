import React from "react";
import {
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet,
} from "react-native";
import { ListCardComponent } from "./src/components/lists/listCardsComponent";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import {TabNavigatorComponent} from "./src/components/menu/TabNavigatorComponent";

const App = () => {
    return (
            <TabNavigatorComponent />
    );
};
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        padding: 15,
    },
});
