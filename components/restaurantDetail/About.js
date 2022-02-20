import { View, Text, Image } from 'react-native'
import React from 'react'

// const image = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

const image = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"

const title = "Farhouse Kitchen Thai Cuisine"
const description = "Thai Comfort Food $$  (29123+)"
export default function About() {
  return (
    <View>
      <RestaurantImage iamge={image}/>
      <RestaurantTitle title={title}/>
      <RestaurantDescription description={description }/>
    </View>
  )
}

const RestaurantImage = ({image}) => (
  <Image 
    // source={{uri:image}} 
    source={require('../../assets/images/bg2.jpg')}
    style={{ width: "100%", height: 200 }} 
  />
);

const RestaurantTitle = ({title}) => (
  <Text style={{
    fontSize: 29,
    fontWeight: "600",
    marginTop: 10,
    marginHorizontal:15,
  }}>
    {title}
  </Text>
);

const RestaurantDescription = ({description}) => (
  <Text
    style={{
      marginTop:15,
      marginHorizontal:15,
      fontWeight:"400",
      fontSize:15.5
    }}
  >
    {description}
  </Text>
);

