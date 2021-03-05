import React from 'react';
import  {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import Home from '../screens/Home';
import Schedule from '../screens/Schedule';
import Favorites from '../screens/Favorites';
import Cart from '../screens/Cart';
import InfoProfile2 from '../screens/InfoProfile2';



const Tab = createBottomTabNavigator();

export default () => ( 

    <Tab.Navigator tabBar={props=> <CustomTabBar {...props} /> }> 

        <Tab.Screen name="Inicio" component={Home} />
        <Tab.Screen name="Agenda" component={Schedule} />
        <Tab.Screen name="Favoritos" component={Favorites} />
        <Tab.Screen name="Carrinho" component={Cart} />
        <Tab.Screen name="Perfil" component={InfoProfile2} />

    </Tab.Navigator>

);