import CardViewComponent from "./src/components/templates/CardViewComponent";

export const RouterConfig = {
  CardView: {
    screen: CardViewComponent,
    path: "card/:cardname",
    navigationOptions: ({ navigation }: { navigation: any }) => ({
      title: `${navigation.state.params.cardname}`,
    }),
  },
};
