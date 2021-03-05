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

export const InputContainer = styled.View`
  margin-top: 10px;
  width: 100%;
  height: 150px;
  padding: 0 5px;
  border: 1px solid ${COLORS.tertiary};
  border-radius: ${SIZES.radius};
  margin-bottom: 10px;
`;

export const ChangePhoto = styled.TouchableOpacity`
  width: 96px;
  height: 96px;
  border-radius: 50px;
  background-color: ${COLORS.primary};
  margin: 30px 0;
  align-items: center;
  justify-content: center;
`;
