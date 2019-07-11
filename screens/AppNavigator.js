import { createStackNavigator } from 'react-navigation';
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";

const AppNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: SettingsScreen },
});

export default AppNavigator;