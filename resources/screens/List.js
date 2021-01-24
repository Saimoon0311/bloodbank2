import React ,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ComponentProvider,
  View,
  FlatList,
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
import database from "@react-native-firebase/database"


export default class List extends React.Component{
//   state={
//     // text:datasnap.val(),
// myList:[]
//   }
  componentDidMount(){
    const list = database().ref('/').child("list")
    list.on("child_added",datasnap=>{
    
this.setState({
  name:datasnap.val().name,
  email:datasnap.val().email,
  number:datasnap.val().number,
  blood:datasnap.val().blood,
  date:datasnap.val().date,
  gender:datasnap.val().gender,
})
console.log(this.state.name)
  });

  //     let user = datasnap.val()
  //     let datas = {...user}
  //     this.setState({
  //         getdata:datas,
  //     })
      // let name = user.list.name
      // console.log("name==>",datas)
      // const [,]
    // })
      // let databasee = ()=>{
    //  database().ref('/').child("list").on("child_added",function (data) {
  //  let datas = data.val()
    // })
  //   const [datas,setdatas] =useState(datas);
  //   console.log(setdatas(datas))
  
  // })
  // firebase.database().ref('/users/' ).on('value', (snapshot) => {
  //   const userObj = snapshot.val();
  //   this.name = userObj.name;
  //   this.avatar = userObj.avatar;
  // });
}
  render(){
    return(
      <SafeAreaView><ScrollView>
        <View>
            <Text style={styles.main}>List of Blood Donars</Text>
        {/* <Text>{this.state.name}</Text> */}
        {/* <Button title="hello" onPress={this.getitems()}/> */}
        {/* {todosKeys.length > 1 ? (
    datas.map(key => (
      <ToDoItem
        key={key}
        id={key}
        datas={this.state.getdata[key]}
      />
    ))
  ) : (

  )} */}
          {/* <Text>{getdata}</Text> */}
        </View>
        </ScrollView></SafeAreaView>
    )
}
}


const styles = StyleSheet.create({
  main:{
    color:"#780505",
    fontSize:30,
    fontWeight:"700",
    alignItems:"center",
    textAlign:"center",
  },
  
  })