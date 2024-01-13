import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {colors} from '../utils/Colors';
import {RoundedButton} from '../utils/roundedButton'
import {spacing} from '../utils/sizes'

export const Focus = ({addSubject}) => {
    const [subject, setSubject] = useState(null)
  return(
  <SafeAreaView style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
      <View style={styles.buttView}>
        <RoundedButton style={styles.button} onPress={() => addSubject(subject)}  title="+"/>
      </View>
    </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
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
    //backgroundColor : colors.white,
    gap: 5,
  },
  button: {
    justifyContent: 'center',
    height: 50,
    width: 70,
  },
  text: {
    color : colors.white,
  }
})