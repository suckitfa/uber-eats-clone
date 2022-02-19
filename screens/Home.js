import { SafeAreaView,View,ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import { localRestaurants } from '../components/home/RestaurantItems'
import RestaurantItems from '../components/home/RestaurantItems'

const YELP_API_KEY = "HUdUtTw9Pcmr8xFWIlMI2ynmIwcjfIor7g_TmvSKRoV5mnB-l94hRvibNahpQPvfnww3wX6ZjmjAWmgXQH6aXPH1NOPaMUFFjzs5_cI7-NuRTemai31djoDlNQ4RYnYx"

export default function Home() {
  const [restaurantData,setRestaurantData] = useState(localRestaurants);
  const [city,setCity] = useState("San Francisco");

  const getRestaurentDataFromYelp  = ({term,location}) =>{
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`;
    const apiOptions = {
      headers:{
        Authorization: `Bearer ${YELP_API_KEY}`
      }
    }
    return fetch(yelpUrl,apiOptions)
      .then(res => res.json())
      .then(json => setRestaurantData(json.businesses));
  };

  // arguments are passed to the function
  useEffect(()=>{
    getRestaurentDataFromYelp({term:"Resturants",location:"背景"});
  },[])

  return ( 
    <SafeAreaView style={{backgroundColor:"#eee",flex:1}}>
        <View style={{backgroundColor:"white", padding:15, }}>
            <HeaderTabs />
            <SearchBar/>
        </View>
        {/* Resturants */}
        <ScrollView showsHorizontalScrollIndicator={false}>
          <Categories />
          <RestaurantItems 
            restaurantData={restaurantData}
            cityHandler={setCity}
          />
        </ScrollView>
        {/* ButtonTabs */}
        <View>
        </View>
    </SafeAreaView>
  )
}