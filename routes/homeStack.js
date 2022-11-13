import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import { createAppContainer } from "react-navigation";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Trang chủ",
      //   headerStyle: {
      //     backgroundColor: "green",
      //   },
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Chi tiết",
      //   headerStyle: {
      //     backgroundColor: "skyblue",
      //   },
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "red",
      height: 90,
    },
  },
});

export default createAppContainer(HomeStack);
