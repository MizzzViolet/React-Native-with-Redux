import React, {Component} from 'react';
import {
  StyleSheet, Linking, Text, View, Image, TouchableHighlight, Platform
} from 'react-native';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state ={
      menuTitle1 : "Legal",
      menuTitle2 : "Privacy",
      menuTitle3 : "Security",
      menuTitle4 : "Cookies",
      menuTitle5 : "www.llyodsbankinggroup.com",
      menuTitle6 : "Rates and charges",
    }
  }
  render() {
    return(
      <View style={styles.menu}>
        <TouchableHighlight style={styles.menuBar} onPress={() => Linking.openURL('http://www.lloydsbank.com/legal.asp')}>
          <Text style={styles.textStyle}>{this.state.menuTitle1}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.menuBar} onPress={() => Linking.openURL('http://www.lloydsbank.com/privacy.asp')}>
          <Text style={styles.textStyle}>{this.state.menuTitle2}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.menuBar} onPress={() => Linking.openURL('http://www.lloydsbank.com/security.asp')}>
          <Text style={styles.textStyle}>{this.state.menuTitle3}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.menuBar}>
          <Text style={styles.textStyle}>{this.state.menuTitle4}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.menuBar} onPress={() => Linking.openURL('http://www.lloydsbankinggroup.com/')}>
          <Text style={styles.textStyle}>{this.state.menuTitle5}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.menuBar} onPress={() => Linking.openURL('http://www.lloydsbank.com/rates-and-charges.asp')}>
          <Text style={styles.textStyle}>{this.state.menuTitle6}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  menu:{
    backgroundColor:'#ffffff',
    flexDirection:'column',
  },
  menuBar:{
    borderTopWidth: 1,
    borderTopColor: '#999999',
    height: 60,
  },
  textStyle:{
    color:'#006A4D',
    fontWeight: 'bold',
    marginTop:20,
    textAlign:'center',
  }
});
