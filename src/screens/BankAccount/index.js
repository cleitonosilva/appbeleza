import React from 'react';
import { Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { FONTS, COLORS } from '../../../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Scroller,

  InputContainer,
} from './styles';

import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import ContainerComponent from '../../components/ContainerComponent'
import HeaderSignupComponent from '../../components/HeaderSignupComponent'

import { Picker } from '@react-native-picker/picker';
import ModalSelector from 'react-native-modal-selector';

export default (props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    navigation.navigate('InfoProfile2');
  }

  function header() {
    return <HeaderSignupComponent title="Dados Bancários" onPress={handleBack} insets={insets} />
  }

  let index = 0;
  const data = [
    { key: index++, section: true, label: 'Fruits' },
    { key: index++, label: 'Red Apples' },
    { key: index++, label: 'Cherries' },
    { key: index++, label: 'Cranberries', accessibilityLabel: 'Tap here for cranberries' },
    // etc...
    // Can also add additional custom keys which are passed to the onChange callback
    { key: index++, label: 'Vegetable', customKey: 'Not a fruit' }
  ];

  function dropdrownIOS() {
    return (<>
      <InputContainer>
        <ModalSelector
          selectStyle={{ borderWidth: 0 }}
          selectTextStyle={{ ...FONTS.placeholde, color: COLORS.primary }}
          optionTextStyle={FONTS.body2}
          initValueTextStyle={{...FONTS.placeholde, color: "grey"}}
          cancelTextStyle={FONTS.body2}
          data={data}
          initValue="Banco"
        // onChange={(option) => { alert(`${option.label} (${option.key}) nom nom nom`) }}
        />
      </InputContainer>

      <InputContainer>
        <ModalSelector
          selectStyle={{ borderWidth: 0 }}
          selectTextStyle={{ ...FONTS.placeholde, color: COLORS.primary }}
          optionTextStyle={FONTS.placeholde}
          initValueTextStyle={{...FONTS.placeholde, color: "grey"}}
          cancelTextStyle={FONTS.placeholde}
          data={data}
          initValue="Tipo de conta"
        // onChange={(option) => { alert(`${option.label} (${option.key}) nom nom nom`) }}
        />

      </InputContainer>
    </>);
  }

  function dropdrownAndroid () {
    return(<>
       <InputContainer>
        <Picker
          selectedValue={'banco'}
          style={{ height: 50, width: '100%', alignItems: 'center' }}
          onValueChange={(itemValue, itemIndex) => {
            // TODOS
          }}>
          <Picker.Item label="Banco" value="banco" />
        </Picker>
      </InputContainer>

      <InputContainer>
        <Picker
          selectedValue={'tipo'}
          style={{ height: 50, width: '100%', alignItems: 'center' }}
          onValueChange={(itemValue, itemIndex) => {
            // TODOS
          }}>
          <Picker.Item label="Tipo de conta" value="tipo" />
        </Picker>
      </InputContainer>
    </>);
  }

  function wantToReceive() {
    return (<>
      <View style={{ height: 15 }} />
      <Text style={{ ...FONTS.h1, color: COLORS.primary, textAlign: 'center', width: '80%' }}>
        Onde deseja receberda Wbeaut?
            </Text>
      <View style={{ height: 10 }} />
      <InputComponent placeholder="Titular" />
      <InputComponent placeholder="CPF ou CNPJ" />

      {Platform.OS == 'ios'? dropdrownIOS (): dropdrownAndroid()}

    </>);
  }

  function addressAcount() {
    return (<>
      <Text style={{ ...FONTS.h1, color: COLORS.primary, padding: 10 }}>Endereço</Text>
      <InputComponent placeholder="Agência" />
      <InputComponent placeholder="Conta" />
    </>);
  }

  return (
    <Container>
      {/* Header with background image and button back */}
      {header()}
      <KeyboardAvoidingView
        style={{ flex: 1, width: '100%' }}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <Scroller bounces={false}>
          <View style={{ height: 15 }} />
          <ContainerComponent >
            {/* Input info account */}
            {wantToReceive()}

            {/* Input address account */}
            {addressAcount()}
            <View style={{ height: 15 }} />

            <ButtonComponent text="Avançar" onPress={handleNext} />

          </ContainerComponent>
          <View style={{ height: 30 }} />
        </Scroller>
      </KeyboardAvoidingView>
    </Container>
  );
};
