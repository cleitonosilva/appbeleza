import React from 'react';
import styled from 'styled-components/native';
import { COLORS} from '../../../constants'

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

export const ChangePhoto = styled.View`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  border-width: 1px;
  border-color: ${COLORS.tertiary};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 3px 0 10px;
`;

export const ChangePhotoButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: ${COLORS.tertiary};
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;
