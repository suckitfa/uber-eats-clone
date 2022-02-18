import { View, Text,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTabs() {
    const [activeTab,setActiveTab] = useState("Delivery")
  return (
    <View style={{flexDirection:"row", alignSelf:"center"}}>
        <HeaderButton  
            text="Delivery" 
            textColor="white" 
            btnColor="black"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
             
        />
        <HeaderButton  
            text="PickUp" 
            textColor="black" 
            btnColor="white"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />
    </View>
  )
}


const HeaderButton = ({text,textColor,btnColor,activeTab,setActiveTab}) =>( 
        <TouchableOpacity
            onPress={()=>setActiveTab(text)}
            style={{
                backgroundColor:activeTab === text ? "black":"white",
                paddingVertical:6,
                paddingHorizontal:16,
                borderRadius:30,
            }}
        >
            <Text 
                style={{
                    color:activeTab === text ? "white": "black",
                    fontSize:15,
                    fontWeight:'900'}}
            >
                {text}</Text>
        </TouchableOpacity>
)