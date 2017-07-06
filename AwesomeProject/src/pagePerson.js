import React, { Component } from 'react'
import {
  Text,
  Image,
  View,
  StyleSheet,
} from 'react-native'

import { Button } from 'react-native-elements'

export default class Person extends React.Component{
  render() {
    return (
      <View style={{paddingTop: 20, width: 300, flex: 1}}>

        <Button
          title='BUTTON'
          backgroundColor='red'/>
        <View style={styles.space}></View>

        <Button
          raised
          icon={{name:'cached'}}
          title='Refresh'/>
        <View style={styles.space}></View>

        <Button
          large
          iconRight
          icon={{name: 'envira', type: 'font-awesome'}}
          title='LARGE WITH RIGHT ICON' />
        <View style={styles.space}></View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  space: {
    height: 20,
  },
});
