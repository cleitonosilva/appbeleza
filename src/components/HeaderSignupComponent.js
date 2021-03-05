import React from 'react';
import styled from 'styled-components';
import { StatusBar, View, Image, Platform } from 'react-native'
import { COLORS, SIZES, icons, images } from '../../constants'

const HeaderContainer = styled.View`
  width: 100%;
  padding: ${SIZES.padding}px;
`;

const ButtonBack = styled.TouchableOpacity`
  margin-top: 10px;
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
`;

const TitleLarge = styled.Text`
  color: ${COLORS.black};
  font-size: ${SIZES.largeTitle}px;
  font-family: 'Poppins-Medium';
  color: ${COLORS.white};
  padding: ${SIZES.padding}px 0;
`;


export default ({ title, onPress, insets }) => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="rgba(78, 148, 99, 0)"
      />
      <Image
        style={{
          width: '100%',
          height: 300,
          position: 'absolute',
          zIndex: 0,
          top: 0,
          left: 0,
          right: 0,
        }}
        resizeMode="cover"
        source={images.background_img}
      />
      <HeaderContainer>
        <View
          style={{
            height: 1,
            marginTop: Platform.OS === 'ios'? 20: insets.top
            }} />
        <ButtonBack onPress={onPress}>
          <Image
            style={{ flex: 1, width: '100%' }}
            resizeMode="contain"
            source={icons.arrow_back}
          />
        </ButtonBack>
        <TitleLarge >{title}</TitleLarge>
      </HeaderContainer>
    </>
  );
};
