import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import globalStyles from '../../../shared/globalStyles'

const TimerTaskList = () => (
  <View style={styles.taskMenu}>
    <View style={styles.task}>
      <Text style={[styles.name, globalStyles.h4]}>ticket MM293</Text>
      <Text>Pomodoro 3 of 5</Text>
    </View>

    <View style={styles.task}>
      <Text style={[styles.name, globalStyles.h4]}>Practice French</Text>
      <Text>Pomodoro 0 of 2</Text>
    </View>

    <View style={styles.task}>
      <Text style={[styles.name, globalStyles.h4]}>Work on game</Text>
      <Text>Pomodoro 0 of 6</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  name: {
    marginRight: 25
  },

  task: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(227, 56, 95, 0.1)',
    borderBottomColor: 'rgba(127,26,65, 0.3)',
    borderBottomWidth: 1,
  },

  taskMenu: {
    flex: 3,
    width: '100%',
    borderTopWidth: 10,
    borderTopColor: '#424242'
  },
})

export default TimerTaskList