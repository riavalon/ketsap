  import React from 'react'
  import { StatusBar, StyleSheet, View } from 'react-native'
  import { NavigationContainer } from '@react-navigation/native'
  import { createDrawerNavigator } from '@react-navigation/drawer'

  import Timer from './src/timer'
  import Settings from './src/settings'
  import Header from './src/components/header'

  const Drawer = createDrawerNavigator()

  const App = () => (
    <NavigationContainer>
      <StatusBar backgroundColor="blue" hidden={false} barStyle="light-content" />
      <View style={styles.container}>
        <Drawer.Navigator initialRouteName="Timer">
          <Drawer.Screen name="Timer">
            {props => (
              <View style={{flex: 1}}>
                <Header {...props} />
                <Timer />
              </View>
            )}
          </Drawer.Screen>
          <Drawer.Screen name="Settings">
            {props => (
              <View>
                <Header {...props} />
                <Settings />
              </View>
            )}
          </Drawer.Screen>
        </Drawer.Navigator>
      </View>
  </NavigationContainer>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#f1f1f1'
  }
})

export default App