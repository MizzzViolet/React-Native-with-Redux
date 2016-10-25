import React, {Component} from 'react';
import PageHeader from './header/header'
import PageBody from './body/body'
import SecurityPage from './securityPage/securityPage'
import HelpBox from './helpBox/helpBox'
import Footer from './footer/footer'

import {
  AppRegistry, View, StyleSheet, ScrollView
} from 'react-native';
export default class App extends Component {
  render(){
    return(
      <ScrollView>
        <PageHeader />
        <PageBody />
        <HelpBox />
        <Footer />
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
