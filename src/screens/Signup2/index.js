import React from 'react';
import { Text, View, KeyboardAvoidingView } from 'react-native';
import { FONTS, COLORS, images } from '../../../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Scroller,

  MessageSigninText,
  MessageSigninTextButton,

  InputRow,
  InputRowItem,
} from './styles';

import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import ButtonSpecial from '../../components/ButtonSpecial';
import ContainerComponent from '../../components/ContainerComponent'
import HeaderSignupComponent from '../../components/HeaderSignupComponent'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default (props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    navigation.navigate('Preference');
  }

  const handleMessageButtonClickSignIn = () => {
    navigation.reset({
      routes: [{ name: 'Signin' }]
    })
  }

  function header() {
    return <HeaderSignupComponent title="Criar Conta" onPress={handleBack} insets={insets} />;
  }

  function myData() {
    return (
      <>
        <Text style={{ ...FONTS.h1, color: COLORS.primary }}>Olá, Pedro!</Text>
        <Text style={{ ...FONTS.h2, color: COLORS.lightGray2, padding:10, textAlign: 'center', letterSpacing: -1, lineHeight:30   }}>Precisamos do seu endereço,desta forma conseguiremos calcular o frete, tudo bem?</Text>
        <View style={{ height: 10 }} />
        <ButtonSpecial text="usar minha localização atual"></ButtonSpecial>
      </>
    );
  }

  function address() {
    return (<>
      <Text style={{ ...FONTS.h1, color: COLORS.primary, padding: 10 }}>Endereço</Text>
      <InputRow>
        <InputRowItem>
          <InputComponent placeholder="CEP" password />
        </InputRowItem>
        <InputRowItem>
          <InputComponent placeholder="Estado" password />
        </InputRowItem>
      </InputRow>
      <InputComponent placeholder="Cidade" />
      <InputComponent placeholder="Rua" />
      <InputRow>
        <InputRowItem>
          <InputComponent placeholder="Número" password />
        </InputRowItem>
        <InputRowItem>
          <InputComponent placeholder="Complemento" password />
        </InputRowItem>
      </InputRow>
    </>);
  }

  function signin() {
    return (
      <MessageSigninTextButton onPress={handleMessageButtonClickSignIn}>
        <MessageSigninText style={FONTS.body3}>Já tem uma conta?</MessageSigninText>
        <Text style={{ ...FONTS.body3, color: COLORS.primary, paddingLeft: 6 }}>Clique aqui</Text>
      </MessageSigninTextButton>
    );
  }

  return (
    <Container>
      {/* Back button, title */}
      {header()}
      <KeyboardAvoidingView
        style={{ flex: 1, width: '100%' }}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
      <Scroller bounces={false}>
        <View style={{ height: 15 }} />
        <ContainerComponent >
          <View style={{ height: 15 }} />

          {/* Input data */}
          {myData()}

          {/* Input address */}
          {address()}

          <View style={{ height: 15 }} />
          <ButtonComponent text="Avançar" onPress={handleNext} />

          {/* Back signin */}
          {signin()}
        </ContainerComponent>
        <View style={{ height: 30 }} />
      </Scroller>
      </KeyboardAvoidingView>
    </Container>
  );
};
