import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import Home from './screens/Home'
import RestaurantDetail from './screens/RestaurantDetail'
import Test from './screens/Test'
export default function RootNavigation() {
    const Stack = createStackNavigator()
    const screenOptions = {
        headerShown:false
    }
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={screenOptions}
                initialRouteName="Test"
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="RestaurantDetail" component={RestaurantDetail}/>
                <Stack.Screen name="Test" component={Test} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
