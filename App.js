import React, {useState} from 'react';
import { Text, View, SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import {colors} from './components/utils/Colors'
import {Focus} from './components/features/focus'
import {Timer} from './components/features/Timer'
import {RoundedButton} from './components/utils/roundedButton'

export default function App() {
    const [currentSubject, setCurrentSubject] = useState('test')
  return (
    <SafeAreaView style={styles.home}>
      {!currentSubject ?(
        <Focus style={styles.focus} addSubject={setCurrentSubject} />
        //<Text style={styles.text}>No Tasks</Text>
      ):(
        <Timer style={styles.tasks}
          focusSubject = {currentSubject}
          onTimerEnd = {() => {}}
          clearSubject = {() => setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home: {
    flex : 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor :colors.lightBlue,
  },
  text:{
    color : colors.white,
  },
  focus:{
    borderColor: colors.orange,
  },
  tasks:{
    flex: 1,
  }
});
