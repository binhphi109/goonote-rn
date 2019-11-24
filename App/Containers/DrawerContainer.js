import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux'
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Devider from '../Components/Drawer/Devider'
import DrawerItem from '../Components/Drawer/DrawItem'
import DrawerHeader from '../Components/Drawer/DrawHeader'
import UserActions from '../Redux/UserRedux'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  logout: UserActions.logout
}, dispatch)

class DrawerContainer extends React.Component {
  render () {
    const { navigation } = this.props
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <DrawerHeader
            title='Goo Ku'
            sub='Fullstack Developer'
            icon='user'
            onPress={() => {
              navigation.navigate('Profile')
              navigation.closeDrawer()
            }}
          />
          <Devider />
          <DrawerItem
            title='Profile'
            icon='user'
            onPress={() => {
              navigation.navigate('Profile')
              navigation.closeDrawer()
            }}
          />
          <DrawerItem
            title='Settings'
            icon='cog'
            onPress={() => {
              navigation.navigate('Settings')
              navigation.closeDrawer()
            }}
          />
          <Devider />
          <DrawerItem
            title='Logout'
            icon='sign-out'
            onPress={() => {
              this.props.logout()
              navigation.navigate('Auth')
              navigation.closeDrawer()
            }}
          />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
  }
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(DrawerContainer)
