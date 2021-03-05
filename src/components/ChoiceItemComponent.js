import React from 'react';
import styled from 'styled-components';
import { COLORS, SIZES, FONTS } from '../../constants'

const ChoiceItem = styled.TouchableOpacity`
  width: 48%;
  height: 50px;
  background-color: ${COLORS.white};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-color: ${COLORS.tertiary};
  border-width: 1px;
  padding: 0 5px;
`;

const ChoiceItemText = styled.Text`
  color: ${COLORS.tertiary};
  text-align: center;
  flex-wrap: wrap;
`;

export default ({ text, onPress, style, value }) => {
  return (
    <ChoiceItem
      onPress={onPress}
      style={{
        backgroundColor: value ? COLORS.primary : COLORS.white,
        borderColor: value ? COLORS.primary : COLORS.tertiary,
      }}
    >
      <ChoiceItemText style={{
        ...FONTS.body2,
        color: value ? COLORS.white : COLORS.tertiary,
      }}

      >{text}</ChoiceItemText>
    </ChoiceItem>
  );
};
