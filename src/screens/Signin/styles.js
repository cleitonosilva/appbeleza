import React from 'react';
import styled from 'styled-components';
import { SIZES, COLORS } from '../../../constants';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;

export const CardContainer = styled.View`
  flex: 1;
  padding: ${SIZES.padding}px;
`;

export const CardInput = styled.View`
  width: 100%;
  background-color: ${COLORS.white};
  border-radius: ${SIZES.radius2}px;
  padding: ${SIZES.padding2}px;
  align-items: center;
`;

export const TileLarge = styled.Text`
  color: ${COLORS.primary};
  margin-bottom: 30px;
`;

export const SignupButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  flex-direction: row;
  background-color: ${COLORS.white};
  border-radius: ${SIZES.radius}px;
  border-color: ${COLORS.primary};
  border-width: 1px;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;


export const SignupButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${COLORS.primary};
  
  
`;


export const EnterWithAnother = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 10px;
  position: relative;
`;

export const EnterWithAnotherDivi = styled.View`
  border: 1px solid ${COLORS.lightGray2};
  width: 100%;
  position: absolute;
`;

export const EnterWithAntherContainer = styled.View`
  background-color: ${COLORS.white};
  padding: 0 5px;
`;

export const EnterWithAntherText = styled.Text`
  color: ${COLORS.lightGray2};
`;

export const MessageSigninTextButton = styled.TouchableOpacity`
  padding-left: 5px;
  flex-direction: row;
  margin-top: 20px;
  color: ${COLORS.primary};
`;

export const MessageSigninText = styled.Text`
  color: ${COLORS.lightGray2};
`;