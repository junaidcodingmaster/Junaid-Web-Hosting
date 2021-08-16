import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}> {this.props.title} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: "blue",
    height:50
  },
  text:{
    color: 'white',
    padding: 10,
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default AppHeader;
