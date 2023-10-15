import React from 'react';
import {ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();
// const image = {uri: 'https://mobcup.net/wallpaper/star-wars-8ww3f8ak'};

function App(): JSX.Element {
  return (
    // <ImageBackground
    //   source={require(image)} resizeMode="cover" style={{
    //   flex: 1,
    //   resizeMode: 'cover',
    //   justifyContent: 'center',
    // }}
    //   >
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{title: 'Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </ImageBackground>
  );
}

export default App;
