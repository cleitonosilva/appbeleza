import React from 'react';
import styled from 'styled-components/native';

import { FONTS, COLORS, images } from '../../constants';


import HomeIcon from '../../assets/icons/home.svg';
import  UserIcon from '../../assets/icons/person.svg';
import  LupaIcon from '../../assets/icons/lupa.svg';
import  CalendarioIcon from '../../assets/icons/date.svg';
import  FavoriteIcon from '../../assets/icons/coracao.svg';





const TabArea = styled.View` 
    height: 60px;
    background-color: #B4DEBA;
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
flex: 1;
justify-content: center;
align-items: center;
`;

export default ({state, navigation}) => {''



    const goTo = (screenName) => {
        navigation.navigate(screenName)

    }

    return (

        <TabArea>
            <TabItem onPress={()=>goTo('Home')} >
                <HomeIcon width="24" height="24" fill="#050505"  />
            </TabItem>

            <TabItem onPress={()=>goTo('InfoProfile')} >
                <UserIcon width="24" height="24"   />
            </TabItem>


            <TabItem onPress={()=>goTo('Cart')} >
                <LupaIcon width="24" height="24" fill="#050505"  />
            </TabItem>


            <TabItem onPress={()=>goTo('Schedule')} >
                <CalendarioIcon width="24" height="24" fill="#050505"  />
            </TabItem>

            <TabItem onPress={()=>goTo('Favorites')} >
                <FavoriteIcon width="24" height="24" fill="#050505"  />
            </TabItem>

            
        </TabArea>

    );
} 