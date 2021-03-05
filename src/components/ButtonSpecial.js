import React from 'react';
import styled from 'styled-components';
import {COLORS , SIZES, FONTS, images} from '../../constants';
import { Image } from 'react-native';


const EspecialButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.primary};
  border-radius: ${SIZES.radius};
  justify-content: center;
  align-items: center;
`;

const EspecialButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${COLORS.primary};
  font-family:  "Poppins-SemiBold";
`;

export default ({text, onPress, style}) => {
  return (
    <EspecialButton onPress={onPress}>
      <Image source={images.location} style={{ width: 40, height: 40, position: 'absolute', left: 15}} />
      <EspecialButtonText style={FONTS.button}>{text}</EspecialButtonText>
    </EspecialButton>
  );
};


