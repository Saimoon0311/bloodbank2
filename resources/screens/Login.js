
import React ,{useState,ComponentLifecycle} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ComponentProvider,
  View,
  TextInput,
  Button,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { LoginManager,AccessToken } from "react-native-fbsdk";
import 'react-native-gesture-handler';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import { useState } from 'react';
import database from "@react-native-firebase/database"
// import Home from "../screens/Home"



import auth from '@react-native-firebase/auth';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';
// import object from './object.js'

export default function Login ({navigation},object){
  // const home 
  
  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
  
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
    // const getdata = await AccessToken.getCurrentData();
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential)

    .then((user)=>{
        let users = user.additionalUserInfo.profile;
        let get = users
      })
      .catch((err)=>{
        console.log("error==>",err)
      })
      
  }
 let get = "";  
  // var man = new Object();
    return (
    <SafeAreaView><ScrollView>
        <View style={styles.main} >
        <View style={styles.main}>
      <Text style={styles.text}>Create your account</Text>
      {/* <Text style={styles.text}>SM Blood Bank</Text>
      <Text style={styles.texts}>Please Signup for more process</Text> */}
      {/* <Button style={styles.btn}  onPress={onFacebookButtonPress}  title="facebook login"/> */}
      <TouchableOpacity
        style={styles.btn}
        onPress={onFacebookButtonPress}
      >
        <Text style={styles.btn}>f     Login With Facebook</Text>
      </TouchableOpacity>
      {/* <View><Text style={{fontSize:30,}}>{"users==>",users}</Text></View> */}
      <Text>{get}</Text>
      {/* <Text>{}</Text> */}
       {/* <Text>Login</Text> */}
       </View>
       </View>
      </ScrollView></SafeAreaView>
  );
}




const styles = StyleSheet.create({
  main: {
paddingTop:50,

// backgroundColor:"#4a1217",
alignItems:'center',
  },
  text:{
fontSize:30,
paddingBottom:40,
color:"#4a1217",
fontWeight:'bold',
  },
  texts:{
    fontSize:30,
    marginTop:50,
    marginBottom:60,
    textAlign:"center",
    color:"#4a1217",
    fontWeight:'bold',
      },
      btn:{
  backgroundColor:"#cad0ed",
  // fontWeight: "bold",
  borderColor:"blue",
  paddingTop:5 ,
  width:290,
  fontSize:20,
  borderRadius:3,
  fontWeight:"bold",
  justifyContent:"center",
  alignItems:"center",
  alignContent:"center",
  height:40,
  // borderWidth:2,
  textAlign:"center",
  color:"blue",
      },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


