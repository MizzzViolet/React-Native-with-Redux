import React, {Component} from 'react';
import {
  StyleSheet, Linking, Text, View, Image, TouchableHighlight, Platform
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
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
     TouchableElement = TouchableNativeFeedback;
    }
    return(
        <View style = {styles.header}>
              <Image source={require('../img/logos/mobile_logo.png')} style = {styles.imageStyle}/>
              <TouchableHighlight style={{marginLeft:105}} onPress={() => Linking.openURL('http://www.lloydsbank.com/legal.asp')}>
                <View style={{flexDirection:'row'}}>
                  <Text style={[styles.titleText, {fontFamily:'lloyds_bank_jack-regularWEB'}]}>{this.state.titleText}{"\n"}<Text style={styles.bodyText}>{this.state.bodyText}</Text></Text>
                  <Image source={require('../img/icons/padlock-white.png')} style = {styles.iconStyle}/>
                </View>
            </TouchableHighlight>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor:'#006a4d',
    height: 82,
    flexDirection: 'row',
  },
  imageStyle:{
    height: 40,
    marginLeft : 20,
    marginTop: 20,
    width: 40,
  },
  iconStyle:{
    alignItems: 'flex-end',
    height:20,
    marginTop: 35,
    width:14,
  },
  titleText:{
    color:'#ffffff',
    // fontFamily: 'llyods_bank_jack-regularWEB',
    textAlign: 'right',
    fontSize:12,
    marginRight: 15,
    marginTop: 30,
  },
  bodyText:{
    textAlign: 'right',
    color:'#ffffff',
    fontSize:12,
    fontStyle: 'italic',
    marginRight: 15,
    marginTop: 2,
  },
  button:{
    backgroundColor:'#006a4d',
    height: 81,
  }
});
