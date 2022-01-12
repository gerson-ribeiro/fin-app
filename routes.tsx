import CardViewComponent from "./src/components/unit/CardViewComponent";

export const RouterConfig = {
    CardView: {
        screen: CardViewComponent,
        path: "card/:cardname",
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.cardname}`,
        }),
    },
};
