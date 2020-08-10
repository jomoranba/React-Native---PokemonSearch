import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import { Button } from 'native-base';

var myBackground = require('../assets/icons/landing.jpg');

class Landing extends React.Component{
    render(){
        return(
            <ImageBackground source={myBackground} style={styles.Background}>
                    <View style={styles.viewstyle}>
                        <Text style={styles.Text}>Welcome to PokeSearch</Text>
                    <Button
                    style={styles.ButtonStyle} 
                    block
                    onPress={()=>this.props.switchScreen("search")}>
                        <Text style={styles.buttonText}>Start Searching</Text>
                    </Button>
                </View>
            </ImageBackground>  
        )
    }
}

const styles = StyleSheet.create({
    viewstyle: {
      flex:1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    Background: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    Text: {
      fontSize:20,
      color: 'blue',
      alignItems: 'center'
    },
    ButtonStyle:{
      margin:10
    },
    buttonText:{
      fontSize:18,
      color: 'white'
    }
  });

export default Landing;