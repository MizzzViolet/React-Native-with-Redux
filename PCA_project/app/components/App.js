import React from 'react'
import PageHeader from './header/header'
import SecurityPage from './securityPage/securityPage'
import Footer from './footer/footer'

import {
  View, StyleSheet
} from 'react-native';
const App = () => (
  <View>
    <PageHeader />
    <SecurityPage />
    <Footer />
  </View>
)

export default App
