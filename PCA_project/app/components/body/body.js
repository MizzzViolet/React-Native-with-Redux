import React, {Component} from 'react';
import {
  StyleSheet, Text, View, Image, TouchableHighlight, Platform
} from 'react-native';

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
      bottomeText: "If you would like to use the Current Account Switch Service, you'll be given the opportunity to switch at the end of this application."
    };
  }
  render() {
    return(
      <View style = {styles.backgroundBody}>
        <Text style={styles.textStyles}>
          <Text style={styles.topTitleText}>{"\n"}{"\n"}{this.state.topTitleText}{"\n"}</Text>
          <Text style={styles.titleText}>{"\n"}{this.state.titleText}{"\n"}</Text>
        </Text>
        <View style = {styles.contentBody}>
          <Text style={styles.textStyle}>
            <Text style={styles.bodyText1}>{"\n"}{this.state.headText}{"\n\n"}</Text>
            <Text style={styles.bodyText2}>{this.state.questionText1}{"\n\n"}</Text>
            <Text style={styles.radioButton}>Yes{"\n\n"}No{"\n\n"}</Text>
            <Text style={styles.bodyText2}>{this.state.questionText2}{"\n\n"}</Text>
            <Text style={styles.radioButton}>Yes{"\n\n"}No, I want a Joint Account{"\n\n"}</Text>
            <Text style={styles.bodyText2}>{this.state.questionText3}{"\n\n"}</Text>
            <Text style={styles.radioButton}>Yes{"\n\n"}No{"\n\n"}</Text>
            <Text>{this.state.bottomeText}{"\n\n"}</Text>
          </Text>
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
    color:'#333333',
    marginLeft: 25,
    marginRight: 25,
  },
  textStyle:{
    fontSize: 14,
    color:'#333333',
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  bodyText2:{
    fontWeight: 'bold',
  },
  radioButton:{
    height: 24,
      width: 24,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: '#000',
  }

});
