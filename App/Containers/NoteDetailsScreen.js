import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Images, Metrics, Colors, Fonts, AppStyles } from '../Themes'
import moment from 'moment';
import Devider from '../Components/Drawer/Devider';
import ButtonIcon from '../Components/Button/ButtonIcon';
import ButtonText from '../Components/Button/ButtonText';

export default class NoteDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Note details',
    headerStyle: AppStyles.navigationHeader,
    headerTintColor: Colors.secondary,
    headerLeft: (
      <ButtonIcon
        style={styles.navigationLeft} 
        icon='chevron-left' 
        color={Colors.primary}
        iconSize={Metrics.icons.base}
        onPress={() => navigation.goBack()}
        />
    ),
    headerRight: (
      <ButtonText 
        style={styles.navigationRight} 
        text='Edit' 
        color={Colors.primary}
        textBold
        onPress={() => navigation.push('NoteEditor', { new: false, note: navigation.getParam('note') })}
        />
    )
  });

  render () {
    const note = this.props.navigation.getParam('note', {})

    return (
      <View style={styles.root}>
        <ScrollView style={styles.container}>
          <View style={styles.sectionContent}>
            <Text style={styles.title}>
              {note.title}
            </Text>
            <Devider />
            <Text style={styles.subtitle}>
              {moment(note.created).format('DD/MM/YYYY   hh:mm')}
            </Text>
            <Text style={styles.text}>
              {note.content}
            </Text>
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
