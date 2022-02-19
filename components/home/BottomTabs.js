import { View,Text} from 'react-native'
import React from 'react'
import {FontAwesome5} from 'react-native-vector-icons'
export default function BottomTabs() {
  return (
    <View style={{
      flexDirection: 'row',
      margin:10,
      marginHorizontal:30,
      justifyContent: 'space-between',
    }}>   
        {/* Different  Buttons at the bottom*/}
        <Icon icon="home" text="Home"/>
        <Icon icon="search" text="search"/>
        <Icon icon="shopping-bag" text="Grocery"/>
        <Icon icon="receipt" text="Orders"/>
        <Icon icon="user" text="Account"/>
    </View>
  )
}

const Icon = ({icon,text}) => {
  return(
    <View>
      <FontAwesome5 
        name={icon}
        size={25}
        style={{
        marginBottom:3,
        alignSelf:'center',
        }}
    />
    <Text>{text}</Text>
    </View>
  ) 
}