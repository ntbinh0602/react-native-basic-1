import { createStackNavigator } from "react-navigation-stack";

import About from "../screens/about";

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      title: "Về chúng tôi",
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "red",
      height: 90,
    },
  },
});

export default AboutStack;
