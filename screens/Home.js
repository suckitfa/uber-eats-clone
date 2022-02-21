import { SafeAreaView,View,ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import { localRestaurants } from '../components/home/RestaurantItems'
import RestaurantItems from '../components/home/RestaurantItems'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import BottomTabs from '../components/home/BottomTabs'
const YELP_API_KEY = "HUdUtTw9Pcmr8xFWIlMI2ynmIwcjfIor7g_TmvSKRoV5mnB-l94hRvibNahpQPvfnww3wX6ZjmjAWmgXQH6aXPH1NOPaMUFFjzs5_cI7-NuRTemai31djoDlNQ4RYnYx"

export default function Home({navigation}) {
  const [restaurantData,setRestaurantData] = useState(localRestaurants);
  const [city,setCity] = useState("San Francisco");
  const [activeTab,setActiveTab] = useState("Delivery")
  const getRestaurentDataFromYelp  = ({term,location}) =>{
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`;
    const apiOptions = {
      headers:{
        Authorization: `Bearer ${YELP_API_KEY}`
      }
    }
    // 重 yelp上面拉去数据，同时过滤掉不符合要求的数据
    return fetch(yelpUrl,apiOptions)
      .then(res => res.json())
      .then(json => {
        setRestaurantData(
        json.businesses
          // json.businesses.filter(
          //     business=>business.transactions.includes(activeTab.toLowerCase()
          //  )))
      )});
  };

  // looking for city change
  useEffect(()=>{
    getRestaurentDataFromYelp({term:"restaurant",location:city});
  },[city,activeTab])

  return ( 
    <SafeAreaView style={{backgroundColor:"#eee",flex:1}}>
        <View style={{backgroundColor:"white", padding:15, }}>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
            <SearchBar cityHandler={setCity}/>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <Categories />
          <RestaurantItems 
            restaurantData={restaurantData}
            navigation={navigation}
          />
        </ScrollView>
        <Divider size={100}/>
        <BottomTabs />
    </SafeAreaView>
  )
}