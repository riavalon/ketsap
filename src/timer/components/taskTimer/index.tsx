import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import moment from 'moment'

import globalStyles from '../../../shared/globalStyles'

const TaskTimer = () => {
  const defaultStartTime = moment(moment().add(25, 'minutes'), 'MM DD YYYY, h:mm:ss')
  const [isWorking, setIsWorking] = useState(true)
  const [startTime, setStartTime] = useState(defaultStartTime)
  const [elapsedTime, setElapsedTime] = useState('25:00')
  const [isPaused, setPaused] = useState(true)

  useEffect(() => {
    let intervalId;
    clearInterval(intervalId)
    intervalId = setInterval(() => {
      if (!isPaused) {
        const countdown = moment((startTime as any) - (moment() as any))
        const minutes = countdown.format('mm')
        const seconds = countdown.format('ss')
        setElapsedTime(`${minutes}:${seconds}`)
      }
    })
    return () => clearInterval(intervalId)
  }, [isPaused, startTime])

  return (
    <View style={styles.timer}>
      <Text style={styles.timerText}>{elapsedTime}</Text>
      <Text style={[globalStyles.h4, styles.currentTimerState]}>
        {isWorking ? 'Working' : 'Break time'}
      </Text>
      <View style={styles.timerControls}>
        <TouchableHighlight style={styles.timerControlsButton} onPress={() => setPaused(!isPaused)}></TouchableHighlight>
        <TouchableHighlight style={styles.timerControlsButton} onPress={() => setStartTime(defaultStartTime)}></TouchableHighlight>
        <TouchableHighlight style={styles.timerControlsButton} onPress={() => {}}></TouchableHighlight>
        <TouchableHighlight style={styles.timerControlsButton} onPress={() => {}}></TouchableHighlight>
      </View>
      { isWorking ? (
        <TouchableHighlight style={styles.longBreak} onPress={() => setIsWorking(false)}>
          <Text style={styles.longBreakButtonText}>long break</Text>
        </TouchableHighlight>
      ) : (
        <TouchableHighlight style={styles.longBreak} onPress={() => setIsWorking(true)}>
          <Text style={styles.longBreakButtonText}>Next Pomodoro</Text>
        </TouchableHighlight>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  timer: {
    backgroundColor: '#fff',
    flex: 6,
    width: '100%',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },

  currentTimerState: {
    backgroundColor: '#efefef',
    width: '80%',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 10
  },

  timerText: {
    fontSize: 64,
    fontWeight: '700',
    width: '100%',
    textAlign: 'center',
  },

  longBreak: {
    width: '100%',
    height: 50,
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9427f',
  },

  longBreakButtonText: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: '#FFF',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  timerControls: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    alignSelf: 'flex-end'
  },

  timerControlsButton: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: '#efefef',
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1
  },
})

export default TaskTimer