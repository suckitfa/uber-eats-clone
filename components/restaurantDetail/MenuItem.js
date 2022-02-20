import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const foods = [
  {
    title:"Lasagna",
    description:"With butter lettuce, tomato, and mozzarella",
    price: "$12.00",
    image: require('../../assets/images/bg2.jpg')
  }
]

// 使用 StyleSheet.create 统一管理当前组件的样式

// const styles = StyleSheet.create({
//   menuItemStyle :{
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     margin:20
//   },
// });

export default function MenuItem() {
  const food = foods[0]
  return (
    <View>
        <FoodInfo {...food}/>
        {/* FoodImage */}
    </View>
  )
}


const FoodInfo = ({title,description,price})=>(
  <View>
    <Text>{title}</Text>
    <Text>{description}</Text>
    <Text>{price}</Text>
  </View>
);

