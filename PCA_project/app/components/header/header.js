import React, {Component} from 'react';
import {
  StyleSheet, Text, View, Image
} from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Safe & Secure",
      bodyText: "Internet Banking guarantee"
    };
  }
  render() {
    return(
      <View style = {{height:82, flex: 1}}>
        <View style = {styles.header}>
          <Image source={require('../img/logos/mobile_logo.png')} style = {styles.imageStyle}/>
          <Text style={styles.titleText}>{this.state.titleText}{"\n"}<Text style={styles.bodyText}>{this.state.bodyText}</Text></Text>
          <Image source={require('../img/icons/padlock-white.png')} style = {styles.iconStyle}/>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor:'#006a4d',
    height: 82,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageStyle:{
    height: 42,
    marginLeft : 20,
    marginTop: 20,
    width: 42,
  },
  iconStyle:{
    alignItems: 'flex-end',
    height:20,
    marginRight: 30,
    marginTop: 35,
    width:14,
  },
  titleText:{
    color:'#ffffff',
    textAlign: 'right',
    // fontFamily: 'sans-serif',
    fontSize:12,
    marginLeft: 5,
    marginRight: 20,
    marginRight: -75,
    marginTop: 30,
  },
  bodyText:{
    textAlign: 'right',
    color:'#ffffff',
    fontSize:12,
    fontStyle: 'italic',
    marginLeft: 5,
    marginRight: 20,
    marginRight: -75,
    marginTop: 2,
  }
});
