import React from 'react';
import {
  View, ScrollView, Image, StatusBar, StyleSheet,
  KeyboardAvoidingView, Platform,
} from 'react-native';
import { images, COLORS, FONTS } from '../../../constants';



import { useNavigation } from '@react-navigation/native';

import {
  Container,

  HeaderContainer,
  CardContainer,
  CardInput,

  TileLarge,
  SignupButtonText,
  SignupButton,

  EnterWithAnother,
  EnterWithAnotherDivi,
  EnterWithAntherContainer,
  EnterWithAntherText,
} from './styles';

import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';

export default props => {
  const navigation = useNavigation();

  const handleSignup = () => {
    navigation.navigate('Signup')
  }

  const header = () => (
    <HeaderContainer >
      <Image source={images.background_img}
        style={{
          flex: 1, width: '100%', height: 400, position: 'absolute',
          top: 0, left: 0, right: 0
        }} />
      <Image source={images.logo_white} style={{ width: 200, height: 200, zIndex: 1000 }} />
    </HeaderContainer>
  );

  const signinComponents = () => (<>
    <TileLarge style={FONTS.largeTitle}>Login do cliente</TileLarge>
    <InputComponent placeholder='E-mail' />
    <InputComponent placeholder='Senha' password />

    <View style={{ height: 20 }} />

    <ButtonComponent text='Entrar' />

    <SignupButton onPress={handleSignup}>
      <SignupButtonText style={FONTS.button}>Cadastrar</SignupButtonText>
    </SignupButton>
  </>);

  const anotherAccount = () => (
    <EnterWithAnother>
      <EnterWithAnotherDivi />
      <EnterWithAntherContainer>
        <EnterWithAntherText style={FONTS.body2}>
          ou entrar com
        </EnterWithAntherText>
      </EnterWithAntherContainer>
    </EnterWithAnother>
  )

const body = () => (
  <CardContainer>
    <CardInput style={styles.shadow}>
      {/* Sinin components */}
      {signinComponents()}

      {/* Enter another accounto */}
      <View style={{height: 40}} />
      {anotherAccount()}

      <SignupButton onPress={handleSignup}>
      <Image source={images.logo_google} style={{ width: 40, height: 40, position: 'absolute', left: 20}} />
      <SignupButtonText style={FONTS.button}>Login</SignupButtonText>
      </SignupButton>
   

      
    </CardInput>
  </CardContainer>
);



return (
  <Container >
    <StatusBar
      barStyle="light-content"
      translucent={true}
      backgroundColor="rgba(78, 148, 99, 0)" />
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'} >

      <ScrollView style={{ flex: 1, width: '100%', backgroundColor: COLORS.white }}
        bounces={false}
      >
        {/* Image background and logo */}
        {header()}

        {/* Input */}
        {body()}
      </ScrollView>
    </KeyboardAvoidingView>
  </Container>
);
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  },
})
