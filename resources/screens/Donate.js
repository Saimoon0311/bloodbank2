import React ,{useState,Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ComponentProvider,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Button,
  Text,
  StatusBar,
} from 'react-native';
import Login ,{object} from "./Login"
import { NavigationContainer } from '@react-navigation/native';
import { LoginManager,AccessToken } from "react-native-fbsdk";
import 'react-native-gesture-handler';
import MyTabs from "../config/drawer"
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import database from "@react-native-firebase/database"


export default function Donateform ({navigation}){
    const [name,setName] =useState("");
    const [email,setEmail] =useState("");
    const [number,setNumber] =useState("");
    const [blood,setBlood] =useState("");
    const [gender,setGander] =useState("");
    const [date,setDate] =useState("");
    const [key,setKey]= useState(key)

      const save_data = ()=>{
      let user ={
        name,
        email,
        number,
        blood,
        gender,
        date,
        key,
      }
     let key = database().ref('/').child('list').push().key;
     database().ref('/').child('list').push(user)
      alert("Thank you for Donate Blood for needed people ")

      }
   
    return(
        <SafeAreaView><ScrollView>
        <View>
        <View  style={styles.header}>
            <Text style={styles.hy}>Blood Donate Form</Text>
            </View>
         <View>
             {/* <Text>Name</Text> */}
             <Text style={{fontSize:30,color:"#3d0a0a",fontWeight:"bold"}}>Full Name :</Text>
             <TextInput style={styles.text} onChangeText={(text)=>setName(text)} placeholder="Name" />
             <Text style={{fontSize:30,color:"#3d0a0a",fontFamily:"sanSarif",fontWeight:"bold"}}>Email Address</Text>
             <TextInput style={styles.text} onChangeText={(text)=>setEmail(text)} placeholder="example@gmail.com" />
             <Text style={{fontSize:30,color:"#3d0a0a",fontFamily:"sanSarif",fontWeight:"bold"}}>Number</Text>
             <TextInput style={styles.text} onChangeText={(text)=>setNumber(text)} placeholder="0311-1111111" />
             <Text style={{fontSize:30,color:"#3d0a0a",fontFamily:"sanSarif",fontWeight:"bold"}}>Blood Type</Text>
             <TextInput style={styles.text} onChangeText={(text)=>setBlood(text)} placeholder="AB positive" />
             <Text style={{fontSize:30,color:"#3d0a0a",fontFamily:"sanSarif",fontWeight:"bold"}}>Gender</Text>
             <TextInput style={styles.text} onChangeText={(text)=>setGander(text)} placeholder="Male/Female" />
             <Text style={{fontSize:30,color:"#3d0a0a",fontFamily:"sanSarif",fontWeight:"bold"}}>Date of Birth</Text>
             <TextInput style={styles.text} onChangeText={(text)=>setDate(text)} placeholder="dd-mm-yyyy" />
             </View>
             <View style={styles.btns}>
{/* <Button onPress={save_data} title="save data"/> */}
<TouchableOpacity
        style={styles.btn}
        onPress={save_data}
      >
        <Text style={styles.btn}>Save Data</Text>
      </TouchableOpacity>
        </View>
        </View>
        </ScrollView></SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
    //   fontSize:30,
    //   backgroundColor:"darkred",
    //   textAlign:"center",
      alignItems:"center",
      // paddingTop:10
    //   fontWeight:"bold",
    //   color:"white",
    },
    hy:{
        fontSize:40,
        fontStyle:"italic",
        fontWeight:"bold",
        color:"#961717",
        paddingBottom:30,
    },
    btn:{
      backgroundColor:"#c77f7f",
      // fontWeight: "bold",
      // borderColor:"red",
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
      color:"#870c0c",
          },
    text:{
        width:350,
        paddingLeft:15,
        fontSize:20,
        height:50,
        marginBottom:30,
        // paddingTop:50,
        // borderColor:"black",
        borderWidth:1,
        // borderStyle:'solid'  ,
        borderColor:"lightgray",
    },
    btns:{
        alignItems:"center",
        paddingTop:10,
        paddingBottom:20,
    }
})
