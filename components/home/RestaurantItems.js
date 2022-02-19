import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommuityIcons from 'react-native-vector-icons/Ionicons'

// hard code data for restaurants
export const localRestaurants = [
    {
      name: "Beachside Bar",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Benihana",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "India's Grill",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
];

export default function RestaurantItems({restaurantData}) {
  return (
    <TouchableOpacity 
        // 消除颜色退去效果
        activeOpacity={1}
        style={{marginButton:10,}}
    >
        {restaurantData.map((restaurant,index)=>(
            <View 
                style={{
                marginTop:10,
                padding:15,
                backgroundColor:"white",
                }}
                key={index}
            >
                <RestaurantImage 
                    image={restaurant.image_url}
                />    
                <RestaurantInfo 
                    name={restaurant.name} 
                    rating={restaurant.rating}
                />
            </View>
        ))}
    </TouchableOpacity>

  )
}

// Image Card for RestaurantImage
const RestaurantImage = ({image}) => {
    return (
        <>
            <Image
                // 提供的资源有问题无法加载
                source={{
                    uri: image
                }}
                style={{ width: "100%", height: 180 }} />
            {/* like heart-outline */}
            <TouchableOpacity style={{
                position: "absolute",
                top: 15,
                right: 20,
            }}>
                <MaterialCommuityIcons name="heart-outline" size={25} color="#fff" />
            </TouchableOpacity>
        </>
    );
}
const RestaurantInfo = ({name,rating}) => (
    <View style={{
        flexDirection:"row" , 
        justifyContent:"space-between",
        alignItems:"center"}}>
        <View>
            <Text style={{fontSize:15,fontWeight:"bold"}}>{name}</Text>
            <Text style={{fontSize:13,color:"gray"}}>30-40 · min</Text>
        </View>
        <View
            style={{
                backgroundColor:"#eee" ,
                height:30,
                width:30,
                alignItems:"center",
                borderRadius:15,
                justifyContent:"center",
            }}>
            <Text>{rating}</Text>
        </View>
    </View>
);