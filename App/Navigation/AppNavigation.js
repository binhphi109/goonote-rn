import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation'
import DrawerContainer from '../Containers/DrawerContainer/DrawerContainer'
import HomeScreen from '../Containers/HomeScreen'
import NoteDetailsScreen from '../Containers/NoteDetailsScreen'
import CreateNoteScreen from '../Containers/CreateNoteScreen'

const MainNavigator = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    NoteDetailsScreen: { screen: NoteDetailsScreen },
    CreateNoteScreen: { screen: CreateNoteScreen }
  },
  {
    initialRouteName: 'HomeScreen',
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
