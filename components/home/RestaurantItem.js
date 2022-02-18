import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommuityIcons from 'react-native-vector-icons/Ionicons'

export default function RestaurantItem() {
  return (
    <TouchableOpacity 
        activeOpacity={1}
        style={{marginButton:10,}}
    >
        <View style={{
        marginTop:10,
        padding:15,
        backgroundColor:"white",
    }}>
        <RestaurantImage />    
        <RestaurantInfo />
    </View>
    </TouchableOpacity>

  )
}

const RestaurantImage = () => (
    <>
    <Image 
        source={require("../../assets/images/splash.png")}
        style={{width: "100%", height: 180}}
    />
    <TouchableOpacity style={{
        position:"absolute",
        top:10,
        right:20,
    }}>
        <MaterialCommuityIcons name="heart-outline" size={25} color="#fff"/>
    </TouchableOpacity>
    </>
)
const RestaurantInfo = () => (
    <View style={{
        flexDirection:"row" , 
        justifyContent:"space-between",
        alignItems:"center"}}>
        <View>
            <Text style={{fontSize:15,fontWeight:"bold"}}>This is a real nice restaurant! Try it out!</Text>
            <Text style={{fontSize:13,color:"gray"}}>30-40 ~ min</Text>
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
            <Text>4.5</Text>
        </View>
    </View>
);