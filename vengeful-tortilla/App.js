import React,{useState} from 'react';
import { Text, View, StyleSheet,Button,TextInput } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() { 
  const [name, setName]=useState(1);
  const Press = ()=>{
    setName(name+1);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      hello world
      </Text>
      <Text style={styles.paragraph}>
      hello {name}
      </Text>
      <View style={styles.button}><Button      title='click' onPress={Press}/></View>
      <Text>put your name</Text>
      <TextInput style={styles.Input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  //  flex:1,
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    // fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:"red"
  },
  button:{
    color:"red",
    backgroundColor:'#fff',
    marginTop:20,
    width:200,
    textAlign:'center'
  },
  Input:{
    borderWidth:1,
    borderColor: '#777',
    width:200,
    
  }
});
