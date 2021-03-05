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

export const MessageSignin = styled.Text`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MessageSigninText = styled.Text`
  color: ${COLORS.lightGray2};
`;

export const MessageSigninTextButton = styled.TouchableOpacity`
  padding-left: 5px;
  flex-direction: row;
  margin-top: 20px;
  color: ${COLORS.primary};
`;

export const InputRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputRowItem = styled.View`
  width: 48%;
`;
