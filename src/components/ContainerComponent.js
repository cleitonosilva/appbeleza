import React from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components';
import {COLORS , SIZES, FONTS} from '../../constants'

const InputContainer = styled.View`
  width: ${SIZES.width - SIZES.padding3};
  background-color: ${COLORS.white};
  border-radius: ${SIZES.radius2};
  align-items: center;
  justify-content: center;
  padding: ${SIZES.padding}px;

`;

const styles = StyleSheet.create({
  shadow : {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  }
})

export default ({children, style}) => {
  const _style = {...styles.shadow, ...style}

  return (
    <InputContainer style={_style}>
      {children}
    </InputContainer>
  );
};
