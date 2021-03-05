import React from 'react';
import { Text, Image, View, KeyboardAvoidingView } from 'react-native';
import { icons, FONTS, COLORS } from '../../../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Scroller,

  ChangePhoto,
  ChangePhotoButton,

} from './styles';

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
    navigation.navigate('BankAccount')
  }

  function header() {
    return <HeaderSignupComponent title="Documentos" onPress={handleBack} insets={insets} />
  }

  function photoDocument() {
    return (<>
      <Text style={{ ...FONTS.h1, color: COLORS.primary, textAlign: 'center' }}>
        Para atualizar seus documentos nos envie as fotos abaixo</Text>
      <View style={{ height: 10 }} />
      <ChangePhoto>
        <Text style={{ ...FONTS.placeholde, color: COLORS.lightGray2 }}>RG ou CNH Frente</Text>
        <ChangePhotoButton>
          <Image source={icons.add} style={{ width: 20, height: 20 }} resizeMode='contain' />
        </ChangePhotoButton>
      </ChangePhoto>
      <View style={{ height: 10 }} />
      <ChangePhoto >
        <Text style={{ ...FONTS.placeholde, color: COLORS.lightGray3 }}>RG ou CNH Verso</Text>
        <ChangePhotoButton>
          <Image source={icons.add} style={{ width: 20, height: 20 }} resizeMode='contain' />
        </ChangePhotoButton>
      </ChangePhoto>
    </>);
  }

  function photoCertificate() {
    return (<>
      <Text style={{ ...FONTS.h1, color: COLORS.primary, textAlign: 'center' }}>
        Anexe seus certificados caso tenha formação ou especialização
          </Text>
      <View style={{ height: 10 }} />
      <ChangePhoto>
        <Text style={{ ...FONTS.placeholde, color: COLORS.lightGray2 }}>Inclua um certificado</Text>
        <ChangePhotoButton>
          <Image source={icons.add} style={{ width: 20, height: 20 }} resizeMode='contain' />
        </ChangePhotoButton>
      </ChangePhoto>
      <View style={{ height: 10 }} />
      <ChangePhoto>
        <Text style={{ ...FONTS.placeholde, color: COLORS.lightGray2 }}>Inclua um certificado</Text>
        <ChangePhotoButton>
          <Image source={icons.add} style={{ width: 20, height: 20 }} resizeMode='contain' />
        </ChangePhotoButton>
      </ChangePhoto>
    </>);
  }

  return (
    <Container>
      {/* Header with background image ande button back */}
      {header()}
      <KeyboardAvoidingView
        style={{ flex: 1, width: '100%' }}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <Scroller bounces={false}>
          <View style={{ height: 15 }} />
          <ContainerComponent >
            <View style={{ height: 15 }} />

            {/* Change photo document */}
            {photoDocument()}
            <View style={{ height: 36 }} />

            {/* Change photo certificate */}
            {photoCertificate()}
            <View style={{ height: 50 }} />

            <ButtonComponent text="Avançar" onPress={handleNext} />

          </ContainerComponent>
          <View style={{ height: 30 }} />
        </Scroller>
      </KeyboardAvoidingView>
    </Container>
  );
};
