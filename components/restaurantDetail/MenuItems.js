import { View, Text, StyleSheet,Image ,ScrollView} from 'react-native'
import React from 'react'
import {Divider} from 'react-native-elements'
const foods = [
  {
    title:"Lasagna",
    description:"With butter lettuce, tomato, and mozzarella",
    price: "$12.00",
    image: require('../../assets/images/bg1.jpg')
  },
  {
    title:"Lasagna",
    description:"With butter lettuce, tomato, and mozzarella",
    price: "$12.00",
    image: require('../../assets/images/bg1.jpg')
  },
  {
    title:"Lasagna",
    description:"With butter lettuce, tomato, and mozzarella",
    price: "$12.00",
    image: require('../../assets/images/bg1.jpg')
  },
  {
    title:"Lasagna",
    description:"With butter lettuce, tomato, and mozzarella",
    price: "$12.00",
    image: require('../../assets/images/bg1.jpg')
  },{
    title:"Lasagna",
    description:"With butter lettuce, tomato, and mozzarella",
    price: "$12.00",
    image: require('../../assets/images/bg1.jpg')
  },
  {
    title:"Lasagna",
    description:"With butter lettuce, tomato, and mozzarella",
    price: "$12.00",
    image: require('../../assets/images/bg1.jpg')
  },
  {
    title:"Lasagna",
    description:"With butter lettuce, tomato, and mozzarella",
    price: "$12.00",
    image: require('../../assets/images/bg1.jpg')
  },
  {
    title:"Lasagna",
    description:"With butter lettuce, tomato, and mozzarella",
    price: "$12.00",
    image: require('../../assets/images/bg1.jpg')
  },
  {
    title:"Lasagna",
    description:"With butter lettuce, tomato, and mozzarella",
    price: "$12.00",
    image: require('../../assets/images/bg1.jpg')
  },{
    title:"Lasagna",
    description:"With butter lettuce, tomato, and mozzarella",
    price: "$12.00",
    image: require('../../assets/images/bg1.jpg')
  }
]

// 使用 StyleSheet.create 统一管理当前组件的样式
const styles = StyleSheet.create({
  menuItemStyle :{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:20
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {
        foods.map((food,index) => (
          <View>
            <MenuItem key={index} food={food}/>
            <Divider width={0.5} />
          </View>
        ))
      }
    </ScrollView>
  )
}

const MenuItem = ({food}) => (
  <View style={styles.menuItemStyle}>
        <FoodInfo {...food}/>
        <FoodImage {...food}/>
    </View>
);

const FoodInfo = ({title,description,price})=>(
  <View style={{width:240,justifyContent:"space-evenly"}}>
    <Text style={styles.titleStyle}>{title}</Text>
    <Text>{description}</Text>
    <Text>{price}</Text>
  </View>
);


const FoodImage = ({image})=>(
  <Image 
    // source={{uri:image}}
    source={require('../../assets/images/bg1.jpg')} 
    style={{
      width:100,
      height:100,
      borderRadius:8,
    }}
  />
);