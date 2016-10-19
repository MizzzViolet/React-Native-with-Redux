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
      <View style = {{height:82}}>
        <View style = {styles.header}>
          <Image source={require('../img/logos/mobile_logo.png')} style = {styles.imageStyle}/>
          <View>
            <Text style={styles.titleText}>{this.state.titleText}</Text>
            <Text style={styles.bodyText}>{this.state.bodyText}</Text>
            <Image source={require('../img/icons/padlock-white.png')} style = {styles.iconStyle}/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor:'#006a4d',
    flex: 1,
    height: 82,
    flexDirection: 'row',
  },
  imageStyle:{
    height: 42,
    marginLeft : 20,
    marginTop: 20,
    width: 42,
  },
  iconStyle:{
    height:20,
    marginLeft: 20,
    marginTop: 20,
    width:14,
  },
  titleText:{
    color:'#ffffff',
    fontSize:12,
    marginLeft: 5,
    marginTop: 20,
  },
  bodyText:{
    color:'#ffffff',
    fontSize:12,
    marginLeft: 5,
    marginTop: 2,
  }
});
