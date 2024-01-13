import React, { useState } from 'react';
import { View, StyleSheet, Text, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from './Countdown';
import { RoundedButton } from '../utils/roundedButton';
import { spacing } from '../utils/sizes';
import {colors} from '../utils/Colors';
import {Timing} from './Timing';


const ONE_SECOND_IN_MS = 1000;
  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);
  
  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
        minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
      <View style={{paddingTop: spacing.xxl}}>
        <Text style={styles.title}> Focusing On: </Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      </View>
      <View style={{paddingTop: spacing.sm}}>
        <ProgressBar progress={progress} color={colors.dBlue} style={{height:10}} />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime= {setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton size={140} title="Start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton size={140} title="Pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.clearWrapper}>
        <RoundedButton size={70} title='Clear' onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timingWrapper: {
    flex: 0.1,
    padding: 15,
    flexDirection: 'row',
  },
  buttonWrapper: {
    flex: 0.4,
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearWrapper: {
    flex: 0.1,
    padding: 15,
    alignItems: 'center',
  },
  title:{
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task:{
    color: colors.white,
    textAlign: 'center'
  },
});
