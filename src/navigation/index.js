import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../screens/Home";
import ChildLost from "../screens/ChildLost";
import ChildFound from "../screens/ChildFound";
import Result from "../screens/Result"
import Login from '../screens/Login';
import Signup from '../screens/Signup';

const Stack = createStackNavigator();

export default function Navigator(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
        headerStyle: { elevation: 0 },
        cardStyle: { backgroundColor: 'black' }
    }} >
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
            <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}} />
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
            <Stack.Screen name="ChildLost" component={ChildLost} options={{headerShown:false}}/>
            <Stack.Screen name="ChildFound" component={ChildFound} options={{headerShown:false}} />
            <Stack.Screen name="Result" component={Result} options={{headerShown:false}} />
            


            </Stack.Navigator>
        </NavigationContainer>
    );
}
