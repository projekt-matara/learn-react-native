// place index.ios.js code here to work with ios!


// Import a library to help create a component
import React from 'react'
import { Text, AppRegistry, View } from 'react-native'
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
)

// Render that component to the device.
AppRegistry.registerComponent('albums', () => App)
