import React from 'react';
import { StyleSheet, View } from 'react-native';
import Landing from './src/Landing';
import Search from './src/Search';

export default class App extends React.Component {
  state = {
    currentScreen: "landing"
  }
  switchScreen = (currentScreen) =>{
    this.setState({currentScreen});
  }
  renderScreen = () =>{
      if(this.state.currentScreen === "landing"){
          return(
              <Landing switchScreen={this.switchScreen}/>
          )
      }else if(this.state.currentScreen === "search"){
          return(
              <Search />
          )
      }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderScreen()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
