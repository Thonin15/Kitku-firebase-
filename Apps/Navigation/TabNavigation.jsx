import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ExploreScreen from '../Screens/ExploreScreen';
import AddPostScreen from'../Screens/AddPostScreen';
import Profile from '../Screens/ProfileScreen';
import { AntDesign } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
   <Tab.Navigator     screenOptions={{
    headerShown:false
}}>
    <Tab.Screen name='home' component={HomeScreen}
    options={{tabBarLabel:({color})=>(
        <Text style={{color:color, fontSize:12, marginBottom:3}}>Home</Text>
        ),
        tabBarIcon: ({color,size})=>(
            <AntDesign name="home" size={size} color={color} />
        )
        }}
    />
    <Tab.Screen name="explore" component={ExploreScreen}
     options={{tabBarLabel:({color})=>(
        <Text style={{color:color, fontSize:12, marginBottom:3}}>Explore</Text>
        ),
        tabBarIcon: ({color,size})=>(
            <AntDesign name="search1" size={size} color={color} />
        )
        }}
    />
    <Tab.Screen name="addpost" component={AddPostScreen}
     options={{tabBarLabel:({color})=>(
        <Text style={{color:color, fontSize:12, marginBottom:3}}>Add</Text>
        ),
        tabBarIcon: ({color,size})=>(
            <AntDesign name="camerao" size={size} color={color} />
        )
        }}

    />
    <Tab.Screen name="profile" component={Profile}
     options={{tabBarLabel:({color})=>(
        <Text style={{color:color, fontSize:12, marginBottom:3}}>Profile</Text>
        ),
        tabBarIcon: ({color,size})=>(
            <AntDesign name="user" size={size} color={color}/>
        )
        }}
    />
   </Tab.Navigator>
  )
}