import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Images, Metrics, Colors, Fonts, AppStyles } from '../Themes'
import moment from 'moment';
import Devider from '../Components/Drawer/Devider';
import ButtonIcon from '../Components/Button/ButtonIcon';
import ButtonText from '../Components/Button/ButtonText';

export default class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Profile',
    headerStyle: AppStyles.navigationHeader,
    headerTintColor: Colors.secondary,
    headerLeft: (
      <ButtonIcon
        style={styles.navigationLeft} 
        icon='chevron-left' 
        color={Colors.primary}
        iconSize={Metrics.icons.base}
        onPress={() => navigation.navigate('Main')}
        />
    ),
    headerRight: (
      <ButtonText 
        style={styles.navigationRight} 
        text='Save' 
        color={Colors.primary}
        textBold
        />
    )
  });

  render () {

    return (
      <View style={styles.root}>
        <ScrollView style={styles.container}>
          <View style={styles.sectionContent}>
            
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  navigationLeft: { 
    marginLeft: Metrics.marginBase, 
    padding: Metrics.paddingBase 
  },
  navigationRight: { 
    marginRight: Metrics.marginBase, 
    padding: Metrics.paddingBase,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.transparent
  },
  section: {
  },
  sectionContent: {
    padding: Metrics.paddingMedium
  },
  title: {
    color: Colors.secondary,
    fontSize: Fonts.size.h5,
    marginBottom: Metrics.marginSmall,
    fontWeight: 'bold'
  },
  sectionMeta: {
  },
  subtitle: {
    fontSize: Fonts.size.small,
    color: Colors.grey
  },
  text: {
    marginTop: Metrics.marginMedium,
  }
})
