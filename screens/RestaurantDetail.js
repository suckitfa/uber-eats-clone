import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import About from '../components/restaurantDetail/About'
import { Divider } from 'react-native-elements'
import MenuItem from '../components/restaurantDetail/MenuItem'
export default function RestaurantDetail() {
  return (
    <View>
      <View>
        <About />
        <Divider size={5}/>
      </View>
      <MenuItem />
    </View>
  )
}
