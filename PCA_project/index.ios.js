import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './app/components/App';
import { createStore } from 'redux'
// import reducer from './app/reducers'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// function configureStore(initialState) {
//   const enhancer = compose(
//     applyMiddleware(
//       thunkMiddleware, // lets us dispatch() functions
//       loggerMiddleware,
//     ),
//   );
//   return createStore(reducer, initialState, enhancer);
// }

// const store = createStore(reducer);
// import Header from '/app/components/header`/header';
export default class PCA_project extends Component {
  render() {
    return (
      // <Provider store={store}>
      <Provider>
        <App />
      </Provider>
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit index.ios.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Press Cmd+R to reload,{'\n'}
      //     Cmd+D or shake for dev menu
      //   </Text>
      // </View>
    );
  }
}
// const styles = StyleSheet.create({
//   header:{
//     backgroundColor:'#006a4d',
//     flex: 1,
//     height: 82,
//   }
// });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('PCA_project', () => PCA_project);
