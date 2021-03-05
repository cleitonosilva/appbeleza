import React from 'react';
import styled from 'styled-components';
import {COLORS , SIZES, FONTS} from '../../constants'

const CustomButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${COLORS.primary};
  border-radius: ${SIZES.radius};
  justify-content: center;
  align-items: center;
`;

const CustomButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  font-family:  "Poppins-SemiBold";
`;

export default ({text, onPress, style}) => {
  return (
    <CustomButton onPress={onPress}>
      <CustomButtonText style={FONTS.button}>{text}</CustomButtonText>
    </CustomButton>
  );
};
