import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {colors} from '../utils/Colors';
import {RoundedButton} from '../utils/roundedButton'

export const Focus = ({addSubject}) => {
    const [subject, setSubject] = useState(null)
  return(
  <SafeAreaView style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput style={styles.inputField} onChangeText={setSubject } label="What are you planning to do?"/>
      <View style={styles.buttView}>
        <RoundedButton style={styles.button} onPress={() => addSubject(subject)}  title="+"/>
      </View>
    </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
  },
  inputField: {
    width : 260,
  },
  buttView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 0.08,
    padding:50,
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  button: {
    justifyContent: 'center',
  },
  text: {
    color : colors.white,
  }
})