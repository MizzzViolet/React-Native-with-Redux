import React, {Component} from 'react';
import {
  StyleSheet, Text, View, WebView, TouchableWithoutFeedback, Image, TouchableHighlight, Platform
} from 'react-native';

export default class HelpBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <View style = {styles.backgroundBody}>
        <TouchableHighlight style={styles.box}>
          <Text style={styles.texts}>NEED HELP?
            <TouchableHighlight style={styles.container}>
              <Image source={require('../img/icons/plus-secondaryondark.png')} />
            </TouchableHighlight>
            </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  backgroundBody:{
    backgroundColor:'#eee',
  },
  box:{
    backgroundColor:'#006a4d',
    marginBottom:30,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  container:{
    alignItems:'flex-end',
    height:25,
    marginTop:10,
    paddingLeft:50,
    width:195
  },
  texts:{
    color:'#fff',
    fontSize: 20,
    fontWeight:'bold',
    margin:20,
  }
});
