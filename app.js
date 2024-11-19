
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Director from './project/director';
import Cast from './project/cast';
import Shows from './project/shows';
import Episodes from './project/Episodes';
import Rate from './project/rate';
import Actor from './project/actor';
import Login from './project/login';
import Main from './project/main';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  
  return (
    <View style={styles.container}>
     
    
     
      <Text style={styles.baseText}>
      Suggestion
      <Text style={styles.innerText}> for Top Rated Shows.</Text>
    </Text>
    <TouchableOpacity
  onPress={() => navigation.navigate('Actors')}
  style={[styles.buttonNext, { borderColor: 'white' }]}
>
  <Text style={styles.buttonNextTxt}>login as Guest</Text>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => navigation.navigate('Login')}
  style={[styles.buttonNext, { borderColor: 'white' }]}
>
  <Text style={styles.buttonNextTxt}>Login</Text>
</TouchableOpacity>
<TouchableOpacity
  onPress={() => navigation.navigate('Actors')}
  style={[styles.buttonNext, { borderColor: 'white' }]}
>
  <Text style={styles.buttonNextTxt}>Signup</Text>
</TouchableOpacity>
      </View>
     )
};

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Director" component={Director} />
      <Stack.Screen name="Cast" component={Cast} />
      <Stack.Screen name="Rate" component={Rate} />
      <Stack.Screen name="Shows" component={Shows} />
      <Stack.Screen name="Episodes" component={Episodes} />
      <Stack.Screen name="Actors" component={Actor} />
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="Main" component={Main} /> */}
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black', // Add your desired background color here
  },
  item: {
    marginBottom: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: 'white', // Optionally set background color for items
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  txtInput: {
    borderRadius: 20,
    marginBottom: 22,
    minHeight: 52,
    width: '100%',
    backgroundColor: 'darkslateblue',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  buttonNext: {
    marginTop: 22,
    minHeight: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: '100%',
    backgroundColor: 'darkslateblue',
  },
  buttonNextTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  Name: {
    fontWeight: 'bold',
  },
  baseText: {
    fontWeight: 'bold',
    color : 'white',
    fontSize : 24,
    marginTop :12
  },
  innerText: {
    color: 'papayawhip',
  },
});

export default App;
