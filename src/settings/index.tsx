import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Settings = () => (
  <View style={styles.settingsContainer}>
    <Text>I am the settings page!</Text>
  </View>
)

const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  }
})

export default Settings