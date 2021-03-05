import React from 'react';
import styled from 'styled-components/native';
import { COLORS } from '../../../constants'

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

export const ChoiceContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;
