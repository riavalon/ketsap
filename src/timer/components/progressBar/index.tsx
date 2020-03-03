import React from 'react'
import { View, StyleSheet } from 'react-native'

const ProgressBar = () => (
  <View style={styles.progressBarMask}>
    <View style={[styles.progressBar]}></View>
  </View>
)

const styles = StyleSheet.create({
  progressBarMask: {
    flex: 1,
    marginBottom: 30,
    position: "relative",
    width: '90%',
    borderRadius: 50,
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor: 'rgba(0,0,0,0.1)',
    overflow: 'hidden',
  },

  progressBar: {
    backgroundColor: '#F9427F',
    width: '100%',
    flex: 1,
    borderRadius: 50,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '-20%',
  },
})

export default ProgressBar