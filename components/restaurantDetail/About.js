import { View, Text, Image } from 'react-native'
import React from 'react'

const yelpRestaurantInfo = {
  name:"Farhouse Kitchen Thai Cuisine",
  price:"$$",
  reviews:'1500',
  rating:'4.5',
  categories:[
    {title:"Thai"},
    {title:"Vegetarian"},
    {title:"Vegan"},
    {title:"Gluten-free"},
    {title:"Dessert"},
  ],
  image:"",
}

const {
    name,
    price,
    image,
    reviews,
    rating,
    categories
  } = yelpRestaurantInfo;


const title = "Farhouse Kitchen Thai Cuisine"

export default function About({route}) {
  const {
      image,
      name,
      price,
      rating,
      reviews,
      categories      
    } = route.params;
    console.log("params = ", route.params);
    const fomattedCategories = categories.map(category => category.title).join(' · ');
    const description = `${fomattedCategories} ${price ? '·' + price : ''} · ${rating} · (${reviews}+)`;

    return (
      <View>
        <RestaurantImage iamge={image}/>
        <RestaurantName name={name}/>
        <RestaurantDescription description={description }/>
      </View>
    )
}

const RestaurantImage = ({image}) => (
  <Image 
    source={{uri:image}} 
    // source={require('../../assets/images/bg2.jpg')}
    style={{ width: "100%", height: 200 }} 
  />
);

const RestaurantName = ({name}) => (
  <Text style={{
    fontSize: 29,
    fontWeight: "600",
    marginTop: 10,
    marginHorizontal:15,
  }}>
    {name}
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

