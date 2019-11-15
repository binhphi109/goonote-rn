import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation'
import DrawerContainer from '../Containers/DrawerContainer/DrawerContainer'
import LaunchScreen from '../Containers/LaunchScreen'

const MainNavigator = createStackNavigator(
  {
    Home: LaunchScreen
  },
  {
    initialRouteName: 'Home',
    // headerMode: 'float',
    defaulfNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'left',
        flex: 1
      }
    })
  }
)

// Manifest of possible screens
const DrawerStack = createDrawerNavigator({
  Main: MainNavigator
}, {
  initialRouteName: 'Main',
  drawerWidth: 250,
  contentComponent: DrawerContainer
})

export default createAppContainer(DrawerStack)
