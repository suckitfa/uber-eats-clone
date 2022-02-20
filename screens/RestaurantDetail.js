import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import About from '../components/restaurantDetail/About'
export default function RestaurantDetail() {
  return (
    <View>
      <View>
        <About />
      </View>
      <SafeAreaView >
        <Text>Hello world</Text>
      </SafeAreaView>
    </View>
  )
}
