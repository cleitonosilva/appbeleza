import React from 'react';
import { Image, StatusBar, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  MarginTop,
  HeaderContainer,
  ImageLogo,
  BodyContainer,
  MessageFotGot,
  MessageFotGotText,
  MessageText,
  Scroller,
  BackgroundImageHeader,
  ImputContainer,
  TextTitle,
  ButtonSignup,
  ButtonSignupText,
  MessageFotGotTextButton,

  EnterWithAnother,
  EnterWithAnotherDivi,
  EnterWithAntherContainer,
  EnterWithAntherText,

} from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import InputComponent from '../../components/InputComponent';
import ButtonCompoment from '../../components/ButtonComponent';
import ContainerComponent from '../../components/ContainerComponent';

import { images, FONTS, COLORS } from '../../../constants'


import MascoteGi from '../../../assets/img/Mascote-GI-3.svg'
const image = "../../assets/img/FUNDO.png";

export default (props) => {
  const navigation = useNavigation();

  const handleMessageButtonClickSignUp = () => {
    navigation.navigate('Signup');
  };

  const insets = useSafeAreaInsets();
  return (
    <Container>
      <View style={{
        position: 'absolute',
        // top: -300,
        // right: -600,
        alignItems: 'center',
        justifyContent: 'center'
      }}>

        <MascoteGi width="1500" height="2000" />
      </View>


    </Container>
  );
};

