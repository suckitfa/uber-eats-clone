import { View, Text, Image } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
const image = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
const titel = "Farhouse Kitchen Thai Cuisine"
const description = "Thai"
export default function About() {
  return (
    <View>
      <RestaurantImage iamge={image}/>
      {/* Restaurant Title */}
      {/* Restaurant Description */}
      <Divider color="red"/>
        <Text>
            Hello worldHello worldHello worldHello worldHello worldHello world
        </Text>
    </View>
  )
}

const RestaurantImage = ({image}) => <Image source={{uri:image}}  style={{ width: "100%", height: 200 }} />
const RestaurantTitle = ({titel}) => <Text>{titel}</Text>
const RestaurantDescription = ({description}) => <Text>{description}</Text>

