import * as React from 'react';
import { Text, View ,StyleSheet,Image,Button,Hoverable,SafeAreaView,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from 'react-navigation'
import { createBottomTabNavigator,BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Hoverable from "./Hoverable";
import Home from "../screens/Home"
import Login from "../screens/Login"
import Donateform from "../screens/Donate"
import List from "../screens/List"
// import Icon from 'react-native-vector-icons/FontAwesome';

import { color } from 'react-native-reanimated';
function HomeScreen() {
  return (
<SafeAreaView><ScrollView>
    <View>
      <Home/>
    </View>
    </ScrollView></SafeAreaView>
  );
}

function Listin() {
  return (
<SafeAreaView><ScrollView>
    <View>
      <List/>
    </View>
    </ScrollView></SafeAreaView>
  );
}


function Donate() {
  return (
    <SafeAreaView><ScrollView>
    <View>
      <Donateform/>
    </View>
    </ScrollView></SafeAreaView>
  );
}
function Loginup() {
  return (
    <SafeAreaView><ScrollView>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Login/>
    </View>
    </ScrollView></SafeAreaView>
  );
}
const Tab = createBottomTabNavigator();
// const Tabs = BottomTabBarHeightContext();

// const TabNavigator = createBottomTabNavigator({
  // Home: {
  //     screen: HomeScreen, 
  //     navigationOptions: {
  //         tabBarLabel: 'Home', 
  //         tabBarIcon: ({ tintColor }) => (
  //             <Ionicons name="ios-home" color={tintColor} size={25} />
  //         )
  //     }
  // }, 
  // Settings: {
  //     screen: SettingScreen, 
  //     navigationOptions: {
  //         tabBarLabel: 'Settings', 
  //         tabBarIcon: ({ tintColor }) => (
  //             <Ionicons name="ios-settings" color={tintColor} size={25} />
  //         )
  //     }
  // }, 
  // Signout: {
  //     screen: SignoutScreen, 
  //     navigationOptions: {
  //         tabBarLabel: 'Signout', 
  //         tabBarIcon: ({ tintColor }) => (
  //             <SimpleLineIcons name="logout" color={tintColor} size={20} />
  //         )
  //     }
  // }
// });

export default function MyTabs() {
  return (
    // <Hoverable>
    <Tab.Navigator 
    tabBarOptions={{
      labelStyle: { fontWeight:"bold" ,fontSize:18 ,fontStyle:"italic",textAlign:"center"},

        style: {
          
          // backgroundColor:"darkred",
          alignContent:"center",
          // color:"white",
          // fontSize:50,
          // position:"fixed",
          paddingBottom:15,
        },
  }}>
    
    <Tab.Screen name= "Home"  component={HomeScreen} /> 
      <Tab.Screen name="List" component={Listin} />
            <Tab.Screen name="Account" component={Loginup} />
      <Tab.Screen name="Form" component={Donate} />

      
    </Tab.Navigator>
    // </Hoverable>

  );
}

const styles = StyleSheet.create({
name:{
  backgroundColor:"red",
},

})