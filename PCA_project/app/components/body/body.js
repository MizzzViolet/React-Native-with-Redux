import React, {Component} from 'react';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {
  StyleSheet, Text, View, WebView, TouchableWithoutFeedback, Image, TouchableHighlight, Platform
} from 'react-native';
import Hr from 'react-native-hr'

var radio_props = [
  {label: 'Yes', value: 0 },
  {label: 'No', value: 1 }
];
var radio_props2 = [
  {label: 'Yes', value: 0 },
  {label: 'No, I want a Joint Account', value: 1 }
];
export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topTitleText: "You are applying for a Lloyds Classic Account",
      titleText: "Personalise your application",
      headText: "Help us tailor your application by answering a few simple questions",
      questionText1: "Do you already use Internet Banking with Lloyds Bank?",
      questionText2:"Is this account just for you?",
      questionText3: "Would you like to apply for an overdraft on this account?",
      bottomText: "If you would like to use the Current Account Switch Service, you'll be given the opportunity to switch at the end of this application."
    };

  }
  render() {
    var html = '<form action=""><input type="radio" value="Yes"/></form>';
    return(
      <View style = {styles.backgroundBody}>
        <Text style={[styles.textStyles, {color:'#333'}]}>
          <Text style={styles.topTitleText}>{"\n"}{"\n"}{this.state.topTitleText}{"\n"}</Text>
          <Text style={styles.titleText}>{"\n"}{this.state.titleText}{"\n"}</Text>
        </Text>
        <View style = {styles.contentBody}>
          <Text style={[styles.bodyText1,styles.textStyles]}>{"\n"}{this.state.headText}{"\n"}</Text>
          <Text style={[styles.bodyText2,styles.textStyles]}>{"\n"}{this.state.questionText1}{"\n"}</Text>
          <RadioForm style={styles.textStyles} borderWidth={0.5} buttonColor={'#cccccc'} buttonInnerColor={'#649C00'} buttonOuterColor={'#ccc'} radio_props={radio_props} initial={3} borderWidth={5} onPress={(value) => {this.setState({value:value})}}/>
          <Text style={[styles.bodyText2,styles.textStyles]}>{"\n"}{this.state.questionText2}{"\n"}</Text>
          <RadioForm style={styles.textStyles} borderWidth={0.5} buttonColor={'#cccccc'} buttonInnerColor={'#649C00'} buttonOuterColor={'#ccc'} radio_props={radio_props2} initial={3} borderWidth={5} onPress={(value) => {this.setState({value:value})}}/>
          <Text style={[styles.bodyText2,styles.textStyles]}>{"\n"}{this.state.questionText3}{"\n"}</Text>
          <RadioForm style={styles.textStyles} borderWidth={0.5} buttonColor={'#cccccc'} buttonInnerColor={'#649C00'} buttonOuterColor={'#ccc'} radio_props={radio_props} initial={3} borderWidth={5} onPress={(value) => {this.setState({value:value})}}/>
          <Text style={[styles.textStyles, {color:'#333'}]}>{"\n"}{this.state.bottomText}{"\n"}</Text>
          <Image source={require('../img/logos/switch_guarantee_logo.png')} style={{marginLeft: 25,marginRight: 25,marginBottom:20}} />
          <Hr lineColor='#ccc' />
          <TouchableHighlight style={[styles.buttons,{backgroundColor:'#006a4d'}]} onPress={() => Linking.openURL('http://www.lloydsbank.com/legal.asp')}>
            <Text style={[styles.commonText, styles.continueText]}>Continue</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.buttons, {marginBottom:30}]} onPress={() => Linking.openURL('http://www.lloydsbank.com')}>
            <Text style={[styles.commonText, styles.cancelText]}>Cancel</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  backgroundBody:{
    backgroundColor:'#eee',
    flex:1,
  },
  contentBody:{
    backgroundColor:'#fff',
    flex:1,
    marginTop:20,
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
  },
  textStyles:{
    marginLeft: 20,
    marginRight: 20,
  },
  topTitleText:{
    fontSize: 14,
    marginTop: 50,
  },
  titleText:{
    fontSize: 31,
    fontWeight: 'bold',
    marginTop: 20,
  },
  bodyText1:{
    color:'#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bodyText2:{
    color:'#333',
    fontWeight: 'bold',
  },
  radioButton:{
    height: 24,
    width: 24,
    borderRadius: 50,
    borderWidth: 2,
  },
  cancelText:{
    color:'#006a4d',
    fontSize: 22
  },
  buttons:{
    alignItems:'center',
    marginLeft:20,
    marginRight:20,
    marginTop:35,
  },
  commonText:{
    fontWeight: 'bold',
    marginTop:22,
    marginBottom:22,
    textAlign:'center'
  },
  continueText:{
    color:'#fff',
    fontSize: 18
  }

});
