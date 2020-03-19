import React, { useState, useEffect, useCallback } from 'react'
import * as Rx from 'rxjs'
import { takeUntil } from 'rxjs/operators'

import { View, StyleSheet, Text } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

import globalStyles from '../../../shared/globalStyles'
const defaultTime = 10

const TaskTimer = () => {
  const [isWorking, setIsWorking] = useState(true)
  const [isTimerStarted, setIsTimerStarted] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [fmtTime, setFmtTime] = useState('00:10')

  const sub = new Rx.Subscription()
  const subject = new Rx.Subject()

  const formatTimeRemaining = newTime => {
    const minutes = Math.floor(newTime / 60).toString().padStart(2, '0')
    const seconds = (newTime % 60).toString().padStart(2, '0')
    setFmtTime(`${minutes}:${seconds}`)
  }

  const handleStop = () => {
    setIsTimerStarted(false)
    setTimeElapsed(0);
    formatTimeRemaining(0)
    alert('END')
    subject.next()
  }

  useEffect(() => {
    if (isTimerStarted) {
      sub.add(
        Rx.interval(1000)
          .pipe(
            takeUntil(subject)
          )
          .subscribe(() => {
            const timeRemaining = defaultTime - timeElapsed
            if (timeRemaining === 0) {
              return handleStop()
            }
            setTimeElapsed(timeElapsed + 1)

            const minutes = Math.floor(timeRemaining / 60).toString().padStart(2, '0')
            const seconds = (timeRemaining % 60).toString().padStart(2, '0')
            setFmtTime(`${minutes}:${seconds}`)
          })
      )

      return () => {
        if (sub) {
          sub.unsubscribe()
        }
      }
    }
  }, [isTimerStarted, timeElapsed])


  return (
    <View style={styles.timer}>
      <Text style={styles.timerText}>{fmtTime}</Text>
      <Text style={[globalStyles.h4, styles.currentTimerState]}>
        {isWorking ? 'Working' : 'Break'}
      </Text>
      <View style={styles.timerControls}>
        <TouchableHighlight style={styles.timerControlsButton} onPress={() => setIsTimerStarted(true)}>
          <Text>Start</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.timerControlsButton} onPress={handleStop}>
          <Text>Stop</Text>
        </TouchableHighlight>
      </View>
      {isWorking ? (
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
    display: 'flex',
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