/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={styles.headerText}>BMI CALCULATOR</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.grids}>
            <Text style={styles.male}>MALE</Text>
          </View>
          <View style={styles.grids}>
            <Text style={styles.female}>FEMALE</Text>
          </View>
         
        </View> 
        <View style={styles.grids}>
            <Text style={styles.height}>HEIGHT</Text>
          </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20232A',
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  height: {
    width: 200,
    height: 100,
    backgroundColor: '#262e40',
    textAlign: 'center',
    color: 'white',
    textAlignVertical:"center"
  },
  male: {
    width: 100,
    height: 100,
    backgroundColor: '#262e40',
    textAlign: 'center',
    color: 'white',
    textAlignVertical:"center"
  },
  female: {
    width: 100,
    height: 100,
    backgroundColor: '#262e40',
    textAlign: 'center',
    color: 'white',
    textAlignVertical:"center"
  },
  grids: {
    flex:1,
    flexDirection: 'row',
    justifyContent:"center",
  },

  headerText: {
    color: 'white',
    fontSize: 20,
  },
});

export default App;
