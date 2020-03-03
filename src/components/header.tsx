import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const Header = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.button} />
    <View style={styles.appName}>
      <Text style={styles.appTitle}>Ketsap</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 65,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 15,
    width: 40,
    height: 40,
    backgroundColor: '#d3d3d3',
    borderRadius: 5,
  },
  appName: {
    flex: 2,
  },
  appTitle: {
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
})

export default Header