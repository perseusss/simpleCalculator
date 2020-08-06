 import React, {Component} from 'react';
 import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
 import Header from './src/components/header';

 export default class App extends Component{

  constructor(props) {
    super(props);

    this.state = {
      input1: '',
      input2: '',
      result:0
    }
  }

  sum = () => {
    const num1 =parseInt(this.state.input1);
    const num2 =parseInt(this.state.input2);

    const result = num1 + num2;
    this.setState({
      result : result
    })
  }

  deduct = () => {
    const num1 =parseInt(this.state.input1);
    const num2 =parseInt(this.state.input2);

    const result = num1 - num2;
    this.setState({
      result : result
    })
  }
  cross = () => {
    const num1 =parseInt(this.state.input1);
    const num2=parseInt(this.state.input2);

    const result = num1 * num2;
    this.setState({
      result : result
    })
  }
  divide = () => {
    const num1 =parseInt(this.state.input1);
    const num2=parseInt(this.state.input2);

    const result = num1 / num2;
    this.setState({
      result : result
    })
  }


  render(){
  return(
    <View style={styles.container}>
      <Header/>

      <View style={styles.contentWrapper}>
        <TextInput
        style = {styles.input}
        placeholder = 'ilk sayı'
        onChangeText = {(text) => this.setState({ input1: text })}
        value= {this.state.input1} />

        <View style = {styles.buttonWrapper}>
          <Button
            onPress={this.sum}
            color='#841584'
            title='+' /> 
          <Button
            onPress= {this.deduct}
            color='#841584'
            title='-' />
          <Button 
            onPress = {this.cross}
            color='#841584'
            title='x' />
          <Button
            onPress = {this.divide}
            color='#841584'
            title='/' />                 
        </View>

        <TextInput
          style = {styles.input}
          placeholder = 'ikinci sayı'
          onChangeText = {(text) => this.setState({ input2: text }) }
          value= {this.state.input2} />

        <Text style = {styles.sampleText}> sonuc : {this.state.result}</Text>
            
      </View>
    </View>
     );
   }
 }

 const styles = StyleSheet.create({
   buttonWrapper:{
     flexDirection:'row',
     justifyContent:'space-around'
   },
   input:{
     height:50
   },
   sampleText:{
     height:30,
     fontSize:14
   },
   container:{
    flex : 1,
    flexDirection: 'column'
   },
   contentWrapper:{
    padding:20,
    flexDirection:'column',
    justifyContent:'center'
   }
   
 })