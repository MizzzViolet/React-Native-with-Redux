import React, {Component} from 'react';
import {
  StyleSheet, Text, View, Image, TouchableHighlight, Platform
} from 'react-native';

export default class SecurityPAge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Dont worry about your online security",
      bodyBoldText: "Our online and mobile banking guarantee",
      bodyText:"We do all we can to protect you online. Even in the unlikely event of fraud, we promise you won't lose out. As a Lloyds Bank online banking customer, you automatically benefit from our online fraud guarantee: if you use our online service and become a victim of online fraud we guarantee you won't lose any money from your account, and will always be reimbursed in full.",
      bodyText2: "For the vast majority of our customers this situation will never arise, especially if you take a few simple steps:",
      listText: "Keep your password secure and do not let anyone else make use of your security details, even if they share a joint account with you",
      listText2: "Do not let anyone watch you enter your security details and log off after each Internet Banking session",
      listText3: "Carry out regular virus checks on your devices and have the latest operating system and web browser installed. Find out more about how to protect yourself online."
    };
  }
  render() {
    return(
      <View style = {styles.backgroundBody}>
        <View style = {styles.contentBody}>
          <View style={styles.backButton}>
            <Image source={require('../img/icons/chevron-left-primary1.png')} style = {styles.arrow}/>
            <Text style={styles.back}>Back</Text>
          </View>
          <Text style={styles.titleText}>{this.state.titleText}{"\n"}</Text>
          <Text style={styles.textStyle}>
            <Text style={styles.bodyText1}>{this.state.bodyBoldText}{"\n"}</Text>
          </Text>
          <View style={styles.list}>
            <Text style={styles.bulletPoint}>{'\u2022'}</Text>
            <Text style={{marginLeft: 20, marginTop: -18}}>{this.state.listText}</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.bulletPoint}>{'\u2022'}</Text>
            <Text style={{marginLeft: 20, marginTop: -18}}>{this.state.listText2}</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.bulletPoint}>{'\u2022'}</Text>
            <Text style={{marginLeft: 20, marginTop: -18}}>{this.state.listText3}</Text>
          </View>
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
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
  },
  backButton:{
    flexDirection: 'row',
    marginTop: 35,
    marginLeft: 20,
  },
  arrow:{
    marginRight: 7,
    marginTop: 3,
  },
  back:{
    color:'#006A4D',
    fontWeight: 'bold',
  },
  textStyle:{
    color:'#000000',
    marginLeft: 20,
    marginRight: 20,
  },
  titleText:{
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 40,
    textAlign: 'center'
  },
  bodyText1:{
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  bodyText2:{
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'left'
  },
  list:{
    // flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
  },
  bulletPoint:{
    color:'#006A4D',
    fontSize: 20,
    padding:0,
    // marginTop:-5
  }
});
