import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import globalStyles from '../shared/globalStyles'
import KetsapProgressBar from './components/progressBar'
import KetsapTaskTimer from './components/taskTimer'
import KetsapTimerTaskList from './components/timerTaskList'

const Timer = () => (
  <View style={styles.container}>

    <View style={styles.taskName}>
      <Text style={globalStyles.h2}>
        Ticket MM293
      </Text>
    </View>

    <KetsapProgressBar />
    <KetsapTaskTimer />
    <KetsapTimerTaskList />
  </View>
)

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1
  },

  taskName: {
    flex: 1,
  },
})

export default Timer