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

export const TextInputContainer = styled.View`
  margin-top: 10px;
  width: 100%;
  height: 200px;
  border: 1px solid ${COLORS.tertiary};
  border-radius: ${SIZES.radius};
  margin-bottom: 10px;
`;

export const InputContainer = styled.View`
  margin-top: 10px;
  width: 100%;
  /* height: 50px; */
  border: 1px solid ${COLORS.tertiary};
  border-radius: ${SIZES.radius};
  margin-bottom: 10px;
`;
