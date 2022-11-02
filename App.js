import { StyleSheet, Text, View } from 'react-native';
import CuisinesList from './CuisinesList';
import FatFree from "./FatFree"
import store from "./reduxStore/store"
import { Provider } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export default function App() {
  let Stack = createNativeStackNavigator();
  
  const Tab = createMaterialTopTabNavigator();
  return (
    // <View style={styles.container}>
    //  <CuisinesList />
     
    // </View>

    <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={CuisinesList}></Stack.Screen>
        </Stack.Navigator>
        {/* <Tab.Navigator tabBarPosition="bottom"
          screenOptions={{
            tabBarLabelStyle: { fontSize: 12 },
            tabBarItemStyle: { width: 100 },
            tabBarStyle: { backgroundColor: 'powderblue' },
          }}
        >
          <Tab.Screen name="Home" component={CuisinesList}  />
          <Tab.Screen name="Search" component={FatFree}  />
        </Tab.Navigator> */}
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
