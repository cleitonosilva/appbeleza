import React, { useState } from 'react';
import { Text, View, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { FONTS, COLORS } from '../../../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Picker } from '@react-native-picker/picker';
import ModalSelector from 'react-native-modal-selector'

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Scroller,

  InputContainer,
  TextInputContainer,
} from './styles';

import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import ContainerComponent from '../../components/ContainerComponent';
import HeaderSignupComponent from '../../components/HeaderSignupComponent';

export default (props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const [selected, setSelected] = useState('ali')
  const [fruit, setFruit] = useState()

  const handleNext = () => {
    navigation.navigate('InfoProfile')
  }

  function header() {
    return <HeaderSignupComponent title="Preferência" onPress={handleBack} insets={insets} />;
  }

  function experience() {
    return (
      <>
        <Text style={{ ...FONTS.h1, color: COLORS.primary }}>Anos em atuação</Text>
        <InputComponent placeholder="Exemplo: 2 anos" />
        <View style={{ height: 10 }} />
      </>
    );
  }

  function aboutTheExperence() {
    return (
      <>
        <Text style={{ ...FONTS.h1, color: COLORS.primary, textAlign: 'center' }}>
          Conte-nos sobre sua experiência profissional
          </Text>
        <TextInputContainer>
          <TextInput multiline numberOfLines={7} style={{ width: '100%', height: '100%', textAlignVertical: 'top' }} />
        </TextInputContainer>
      </>
    );
  }

  function howHearAbout() {
    return (<>
      <Text style={{ ...FONTS.h1, color: COLORS.primary }}>Como soube da Wbeaut?</Text>
      <InputContainer>
        <Picker
          selectedValue={selected}
          style={{ height: 50, width: '100%', alignItems: 'center' }}
          onValueChange={(itemValue, itemIndex) =>
            setSelected(itemValue)
          }
        >
          <Picker.Item label="aqui" value="ali" />
          <Picker.Item label="la" value="la" />
          <Picker.Item label="ontem" value="ontem" />
        </Picker>
      </InputContainer>
    </>);
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

  function howHearAboutIOS() {
    return (<>
      <Text style={{ ...FONTS.h1, color: COLORS.primary, textAlign: 'center' }}>
        Conte-nos sobre sua experiência profissional
          </Text>
      <InputContainer>
        <ModalSelector
          selectStyle={{ borderWidth: 0 }}
          selectTextStyle={{ ...FONTS.body2, color: COLORS.primary }}
          optionTextStyle={FONTS.body2}
          initValueTextStyle={FONTS.body2}
          cancelTextStyle={FONTS.body2}
          data={data}
          initValue="Selecione uma opção"
        // onChange={(option) => { alert(`${option.label} (${option.key}) nom nom nom`) }}
        />

      </InputContainer>
    </>);
  }

  return (
    <Container>
      {/* Header with background image, button back */}
      {header()}
      <KeyboardAvoidingView
        style={{ flex: 1, width: '100%' }}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>

        <Scroller bounces={false}>
          <View style={{ height: 15 }} />
          <ContainerComponent >
            <View style={{ height: 15 }} />

            {/* years of experence */}
            {experience()}
            <View style={{ height: 15 }} />

            {/* About the experence */}
            {aboutTheExperence()}
            <View style={{ height: 15 }} />

            {/* Text input 'How did you hear about the company' */}
            {Platform.OS == 'ios' ? howHearAboutIOS() : howHearAbout()}

            <View style={{ height: 50 }} />
            <ButtonComponent text="Avançar" onPress={handleNext} />

          </ContainerComponent>
          <View style={{ height: 30 }} />
        </Scroller>
      </KeyboardAvoidingView>
    </Container>
  );
};

function tttt() {
  return (<>

  </>)
}
