import React, { useState, useReducer } from 'react';
import { Text, View, KeyboardAvoidingView } from 'react-native';
import { FONTS, COLORS } from '../../../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';
import { tab } from '../../../src/stacks/MainTab'

import {
  Container,
  Scroller,

  ChoiceContainer,
} from './styles';

import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import ContainerComponent from '../../components/ContainerComponent';
import ChoiceItemComponent from '../../components/ChoiceItemComponent';
import HeaderSignupComponent from '../../components/HeaderSignupComponent';

export default (props) => {

  const initialState = [
    { id: 1, txt: 'Drenagem Linfática', value: false },
    { id: 2, txt: 'Drenagem para Gestantes', value: false },
    { id: 3, txt: 'Estética Pós-parto', value: false },
    { id: 4, txt: 'Massagem Craniana', value: false },
    { id: 5, txt: 'Massagem Modeladora', value: false },
  ]

  const reducer = (state, action) => {
    switch (action.type) {
      case 'CHECK':
        return state.map(item => {
          if (item.id === action.id) {
            return { ...item, value: !item.value }
          } else {
            return item;
          }
        })

      default:
        return state
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  function parseData() {
    return state.map((data, i) => {
      return <ChoiceItemComponent onPress={() => dispatch({ type: 'CHECK', id: data.id })} value={data.value} text={data.txt} />
    })
  }

  const handleBack = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    navigation.navigate('Preference2')
  }

  function header() {
    return <HeaderSignupComponent title="Preferência" onPress={handleBack} insets={insets} />;
  }

  function services() {
    return (
      <>
        <Text style={{ ...FONTS.h1, color: COLORS.primary }}>Quais são seus serviços?</Text>
        <View style={{ height: 10 }} />

        <ChoiceContainer>
          {parseData()}
        </ChoiceContainer>
      
        
      </>
    );
  }

  function formation() {
    return (
      <>
        <Text style={{ ...FONTS.h1, color: COLORS.primary }}>Área de formarção</Text>
        <InputComponent placeholder="Exemplo: Bacharel em Estética" />
      </>
    );
  }

  function placeInterest() {
    return (<>
      <Text style={{ ...FONTS.h1, color: COLORS.primary }}>Bairro de interesse</Text>
      <InputComponent placeholder="Exemplo: Patente Novo" />
    </>);
  }

  return (
    <Container>
      {/* Header with button back and title */}
      {header()}

      <KeyboardAvoidingView
        style={{ flex: 1, width: '100%' }}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'} >
        <Scroller bounces={false}>
          <View style={{ height: 15 }} />
          <ContainerComponent >
            <View style={{ height: 15 }} />
            {/* List services */}
            {services()}

            <View style={{ height: 36 }} />
            {/* Input formation */}
            {formation()}

            <View style={{ height: 36 }} />
            {/* Input place of interest */}
            {placeInterest()}

            <View style={{ height: 50 }} />
            <ButtonComponent text="Avançar" onPress={handleNext} />

          </ContainerComponent>
          <View style={{ height: 30 }} />
        </Scroller>
        </KeyboardAvoidingView>
    </Container>
  );
};
