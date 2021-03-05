import React from 'react';
import { Image, View, TextInput, KeyboardAvoidingView } from 'react-native';
import { icons } from '../../../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Scroller,

  InputContainer,
  ChangePhoto,
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

  const handleNext = () => {
    navigation.navigate('Document')
  }

  function header() {
    return <HeaderSignupComponent title="Dados Profissionais" onPress={handleBack} insets={insets} />
  }

  function changePhoto() {
    return (
      <ChangePhoto>
        <Image source={icons.add} style={{ width: 20, height: 20 }} resizeMode="contain" />
      </ChangePhoto>
    );
  }

  function nickname() {
    return (<>
      <View style={{ height: 15 }} />
      <InputComponent placeholder="Como gostaria de ser chamado?" />
      <View style={{ height: 10 }} />
    </>);
  }

  function aboutYourself() {
    return (
      <InputContainer>
        <TextInput multiline placeholder="Nos conte sobre você?"
          numberOfLines={7}
          style={{ textAlignVertical: 'top', width: '100%', height: '100%' }} />
      </InputContainer>
    );
  }

  return (
    <Container>
      {/* Header with brackground image and button back */}
      {header()}
      <KeyboardAvoidingView
        style={{ flex: 1, width: '100%' }}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <Scroller bounces={false}>
          <View style={{ height: 15 }} />
          <ContainerComponent >
            {/* Chande the photo */}
            {changePhoto()}

            {/* Chande nickname */}
            {nickname()}

            {/* Tell me about yourself */}
            {aboutYourself()}

            <View style={{ height: 50 }} />
            <ButtonComponent text="Avançar" onPress={handleNext} />

          </ContainerComponent>
          <View style={{ height: 30 }} />
        </Scroller>
      </KeyboardAvoidingView>
    </Container>
  );
};
