import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../screens/Home";
import ChildLost from "../screens/ChildLost";
import ChildFound from "../screens/ChildFound";


const Stack = createStackNavigator();

export default function Navigator(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
        headerStyle: { elevation: 0 },
        cardStyle: { backgroundColor: 'black' }
    }} >
            <Stack.Screen name="Home" component={Home} options={{ title:"Home" }} />
            <Stack.Screen name="ChildLost" component={ChildLost} options={{ title:"Report Missing Child" }} />
            <Stack.Screen name="ChildFound" component={ChildFound} options={{ title:"Report Found Child" }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
