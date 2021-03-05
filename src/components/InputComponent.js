import React from 'react';
import styled from 'styled-components';
import { TextInput } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants'

const InputContainer = styled.View`
  margin-top: 10px;
  width: 100%;
  height: 50px;
  border: 1px solid ${COLORS.tertiary};
  border-radius: ${SIZES.radius};
  margin-bottom: 10px;
`;

const InputArea = styled.View`
  width: 100%;
  height: 100%;
  border-radius: ${SIZES.radius};
  align-items: center;
  flex-direction: row;
  padding-left: 15px;
`;

const styles = StyleSheet.create({
  input: {
    ...FONTS.placeholde,
    color: COLORS.primary,
    width: '100%',
    height: '100%',
    padding: 0,
  },
});

export default ({ placeholder, password, value, onChangeText, onFocus, onBlur }) => {
  return (
    <InputContainer>
      <InputArea>
        <TextInput
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          placeholderTextColor="grey"
          style={styles.input}
          secureTextEntry={password}
          value={value}
        // onChangeText={onChangeText}
        />
      </InputArea>
    </InputContainer>
  );
};
