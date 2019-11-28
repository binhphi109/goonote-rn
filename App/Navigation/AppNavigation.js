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
import NoteEditorScreen from '../Containers/NoteEditorScreen'
import { AppStyles, Colors } from '../Themes'

const MainStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    NoteDetails: { screen: NoteDetailsScreen },
    NoteEditor: { screen: NoteEditorScreen },
    CreateNote: { screen: CreateNoteScreen }
  },
  {
    initialRouteName: 'Home'
  }
)

const ProfileStack = createStackNavigator(
  {
    Profile: { screen: ProfileScreen },
  },
  {
    initialRouteName: 'Profile'
  }
)

const SettingsStack = createStackNavigator(
  {
    Settings: { screen: SettingsScreen },
  },
  {
    initialRouteName: 'Settings'
  }
)

const DrawerStack = createDrawerNavigator({
  Main: MainStack,
  Profile: ProfileStack,
  Settings: SettingsStack
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
