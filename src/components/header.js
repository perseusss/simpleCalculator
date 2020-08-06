import React, {Component} from 'react';
import { StyleSheet , Text , View} from 'react-native';

export default class Header extends Component{
    render(){
      return(
      <View style={styles.header}>
        <Text style={styles.headerText}>Basit Hesap makinesi</Text> 
      </View>)
    }
    
}

const styles = StyleSheet.create({
    header:{
        height:80,
        paddingTop:30,
        shadowColor:'black',
        shadowOffset:{width: 0 , height:2},
        shadowOpacity:0.3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
      },
      headerText: {
        fontSize: 20,
        textAlign: 'center'
      }
})