import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Images } from '../Themes'
import Icon from 'react-native-vector-icons/FontAwesome'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: (
      <TouchableOpacity style={{ marginLeft: 10, padding: 10 }} onPress={() => navigation.openDrawer()}>
        <Icon
          name='bars'
          size={24}
        />
      </TouchableOpacity>
    )
  });

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
