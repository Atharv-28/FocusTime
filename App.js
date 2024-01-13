import React, {useState} from 'react';
import { Text, View, SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import {colors} from './components/utils/Colors'
import {Focus} from './components/features/focus'
import {Timer} from './components/features/Timer'
import {RoundedButton} from './components/utils/roundedButton'
import {FocusHistory} from './components/features/FocusHistory'

export default function App() {
    const [currentSubject, setCurrentSubject] = useState();
    const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.home}>
      {!currentSubject ?(
        <>
        <Focus addSubject={setCurrentSubject} />
        <FocusHistory history={history} />
        </>
      ):(
        <Timer style={styles.tasks}
          focusSubject = {currentSubject}
          onTimerEnd = {(subject) => {setHistory([...history, subject])}}
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
  }
});
