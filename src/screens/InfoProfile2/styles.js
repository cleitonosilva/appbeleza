import React from 'react';
import styled from 'styled-components/native';
import { COLORS, SIZES} from '../../../constants'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.white};
`;

export const Scroller = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
  },
}))`
  width: 100%;
`;

export const TypeAccountContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const TypeAccountItem = styled.TouchableOpacity`
  min-width: 130px;
  height: 50px;
  background-color: ${COLORS.white};
  border-radius: 25px;
  border-color: ${COLORS.secondary};
  border-width: 1px;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const InputContainer = styled.View`
  margin-top: 10px;
  width: 100%;
  border: 1px solid ${COLORS.tertiary};
  border-radius: ${SIZES.radius};
  margin-bottom: 10px;
`;

export const CheckBoxContainer = styled.View`
  width: 100%;
  padding: 10px;
`;

export const CheckBoxItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
`;
