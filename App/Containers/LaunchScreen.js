import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { ScrollView, Text, Image, View, StyleSheet } from 'react-native'
import { Images } from '../Themes'
import { Metrics, ApplicationStyles } from '../Themes/'
import { UserSelectors } from '../Redux/UserRedux'
import { empty } from '../Lib/Utils/EmptyUtils';

const mapStateToProps = (state) => ({
  user: UserSelectors.selectUser(state)
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

class LaunchScreen extends Component {

  componentDidMount () {
    const { user } = this.props

    if (empty(user)) {
      this.props.navigation.navigate('Auth')
    } else {
      this.props.navigation.navigate('Main')
    }
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite.
            </Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  }
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(LaunchScreen);
