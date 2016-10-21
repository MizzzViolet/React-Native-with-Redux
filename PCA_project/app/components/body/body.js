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
      bodyBoldText: "Our online and mobile banking guarantee",
      bodyText:"We do all we can to protect you online. Even in the unlikely event of fraud, we promise you won't lose out. As a Lloyds Bank online banking customer, you automatically benefit from our online fraud guarantee: if you use our online service and become a victim of online fraud we guarantee you won't lose any money from your account, and will always be reimbursed in full.",
      bodyText2: "For the vast majority of our customers this situation will never arise, especially if you take a few simple steps:"

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
            <Text style={styles.bodyText1}>{"\n"}{this.state.bodyBoldText}{"\n\n"}</Text>
            <Text style={styles.bodyText2}>{this.state.bodyText}{"\n\n"}</Text>
            <Text style={styles.bodyText2}>{this.state.bodyText2}{"\n\n"}</Text>
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
    marginTop: 20,
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
  }
});
