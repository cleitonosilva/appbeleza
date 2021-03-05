import React from 'react';
import { Text, Image, View, KeyboardAvoidingView, Platform } from 'react-native';
import { images, FONTS, COLORS } from '../../../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Scroller,

  Center,

  MessageSigninText,
  MessageSigninTextButton,

  SignupButtonText,
  SignupButton,

  EnterWithAnother,
  EnterWithAnotherDivi,
  EnterWithAntherContainer,
  EnterWithAntherText,

} from './styles';

import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import ContainerComponent from '../../components/ContainerComponent'
import HeaderSignupComponent from '../../components/HeaderSignupComponent'

export default (props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSignup = () => {
    navigation.navigate('Signup')
  }

  const handleNext = () => {
    navigation.navigate('Signup2');
  }

  const handleMessageButtonClickSignIn = () => {
    navigation.reset({
      routes: [{ name: 'Signin' }]
    })
  }

  function header() {
    return <HeaderSignupComponent title="Criar Conta" onPress={handleBack} insets={insets} />;
  }

  function signup() {
    return (
      <>
        <Text style={{ ...FONTS.h1, color: COLORS.primary }}>Meus dados</Text>
        <View style={{ height: 10 }} />
        <InputComponent placeholder="Nome completo" />
        <InputComponent placeholder="E-mail" />
        <InputComponent placeholder="Senha" password />
        <InputComponent placeholder="Confirme sua senha" password />
        <View style={{ height: 15 }} />
        <ButtonComponent text="Avançar" onPress={handleNext} />
      </>
    );
  }

  function signinBack() {
    return (
      <MessageSigninTextButton onPress={handleMessageButtonClickSignIn}>
        <MessageSigninText style={FONTS.body3}>Já tem uma conta?</MessageSigninText>
        <Text style={{ ...FONTS.body3, color: COLORS.primary, paddingLeft: 6 }}>Clique aqui</Text>
      </MessageSigninTextButton>
    );
  }

  function anotherAccount() {
    return (
<>
      <EnterWithAnother>
        <EnterWithAnotherDivi />
        <EnterWithAntherContainer>
          <EnterWithAntherText style={FONTS.body2}>
            ou entrar com
          </EnterWithAntherText>
        </EnterWithAntherContainer>
      </EnterWithAnother>


      <SignupButton onPress={handleSignup}>
        <Image source={images.logo_google} style={{ width: 40, height: 40, position: 'absolute', left: 20}} />
        <SignupButtonText style={FONTS.button}>Login</SignupButtonText>
      </SignupButton>
  </> 

      );
  }

  return (
    <Container>
      {/* Header, backButton and image */}
      {header()}
      <KeyboardAvoidingView
        style={{ flex: 1, width: '100%' }}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <Scroller bounces={false}>
          {/* <Center style={{backgroundColor: '#344'}}> */}
          <ContainerComponent >
            <View style={{ height: 15 }} />
            {/* Signup  */}
            {signup()}

            {/* Button back signin */}
            {signinBack()}
            <View style={{ height: 60 }} />

            {/* Enter another account */}
            {anotherAccount()}
            <View style={{ height: 60 }} />
          </ContainerComponent>
          {/* </Center> */}
          <View style={{ height: 20 }} />
        </Scroller>
      </KeyboardAvoidingView>
    </Container>
  );
};


