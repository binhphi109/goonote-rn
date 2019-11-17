import { createStackNavigator, createDrawerNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'
import DrawerContainer from '../Containers/DrawerContainer'
import LaunchScreen from '../Containers/LaunchScreen'
import LoginScreen from '../Containers/LoginScreen'
import HomeScreen from '../Containers/HomeScreen'
import NoteDetailsScreen from '../Containers/NoteDetailsScreen'
import CreateNoteScreen from '../Containers/CreateNoteScreen'
import RegisterScreen from '../Containers/RegisterScreen'
import ProfileScreen from '../Containers/ProfileScreen'
import SettingsScreen from '../Containers/SettingsScreen'

const MainStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    NoteDetails: { screen: NoteDetailsScreen },
    CreateNote: { screen: CreateNoteScreen }
  },
  {
    initialRouteName: 'Home',
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

const ProfileStack = createStackNavigator(
  {
    Profile: { screen: ProfileScreen },
  },
  {
    initialRouteName: 'Profile',
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

const SettingaStack = createStackNavigator(
  {
    Settings: { screen: SettingsScreen },
  },
  {
    initialRouteName: 'Settings',
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

const DrawerStack = createDrawerNavigator({
  Main: MainStack,
  Profile: ProfileStack,
  Settings: SettingaStack
}, {
  initialRouteName: 'Main',
  drawerWidth: 250,
  contentComponent: DrawerContainer
})

const AppStack = createStackNavigator({
  App: DrawerStack
}, {
  initialRouteName: 'App',
  headerMode: 'none'
})

const AuthStack = createStackNavigator({
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen }
}, {
  initialRouteName: 'Login',
  headerMode: 'none'
})

const App = createSwitchNavigator({
  Loading: {
    screen: LaunchScreen
  },
  Auth: {
    screen: AuthStack
  },
  App: {
    screen: AppStack
  }
}, {
  initialRouteName: 'Loading',
  headerMode: 'none'
})

export default createAppContainer(App)
