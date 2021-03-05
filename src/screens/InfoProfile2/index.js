import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, StyleSheet, Platform } from 'react-native';
import { FONTS, COLORS } from '../../../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Scroller,

  TypeAccountContainer,
  TypeAccountItem,

  InputContainer,

  CheckBoxContainer,
  CheckBoxItem,
} from './styles';

import ButtonComponent from '../../components/ButtonComponent';
import ContainerComponent from '../../components/ContainerComponent';
import HeaderSignupComponent from '../../components/HeaderSignupComponent';

import { Picker } from '@react-native-picker/picker';
import ModalSelector from 'react-native-modal-selector';

import CheckBox from '@react-native-community/checkbox';

export default (props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const [selected, setSelected] = useState('ali')
  const [typeUser, setTypeUser] = useState('professional')
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const handleBack = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    navigation.navigate('Preference2')
  }

  function header() {
    return <HeaderSignupComponent title="Dados do Profissional" onPress={handleBack} insets={insets} />
  }

  function typeUsers() {
    return (<>
      <View style={{ height: 15 }} />
      <Text style={{ ...FONTS.h1, color: COLORS.primary }}>Tipo de usuário</Text>
      <View style={{ height: 10 }} />

      <TypeAccountContainer >
        <TypeAccountItem
          style={typeUser == 'professional' && {
            backgroundColor: COLORS.primary, borderColor: COLORS.primary
          }}
          onPress={() => setTypeUser('professional')}>
          <Text style={{
            ...FONTS.body,
            color: typeUser == 'professional' ? COLORS.white : COLORS.secondary
          }}>Profissional</Text>
        </TypeAccountItem>
        <TypeAccountItem
          style={typeUser == 'manager' && {
            backgroundColor: COLORS.primary, borderColor: COLORS.primary
          }}
          onPress={() => setTypeUser('manager')}>
          <Text style={{
            ...FONTS.body,
            color: typeUser == 'manager' ? COLORS.white : COLORS.secondary
          }}>Gerente</Text>
        </TypeAccountItem>
        <TypeAccountItem
          style={typeUser == 'receptionist' && {
            backgroundColor: COLORS.primary, borderColor: COLORS.primary
          }}
          onPress={() => setTypeUser('receptionist')}>
          <Text style={{
            ...FONTS.body,
            color: typeUser == 'receptionist' ? COLORS.white : COLORS.secondary
          }}>Recepcionista</Text>
        </TypeAccountItem>
      </TypeAccountContainer>
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

  function dropdrownIOS() {
    return (<>
      <InputContainer>
        <ModalSelector
          selectStyle={{ borderWidth: 0 }}
          selectTextStyle={{ ...FONTS.placeholde, color: COLORS.primary }}
          optionTextStyle={FONTS.body2}
          initValueTextStyle={{ ...FONTS.placeholde, color: "grey" }}
          cancelTextStyle={FONTS.body2}
          data={data}
          initValue="Selecione uma opção"
        // onChange={(option) => { alert(`${option.label} (${option.key}) nom nom nom`) }}
        />
      </InputContainer>
    </>);
  }

  function dropdrownAndroid() {
    return (<>
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

  function mainGoal() {
    return (<>
      <Text style={{ ...FONTS.h1, color: COLORS.primary, textAlign: 'center' }}>
        Qual seu principal objetivo ao criar uma conta Wbeaut?
            </Text>
      {Platform.OS == 'ios' ? dropdrownIOS() : dropdrownAndroid()}

    </>);
  }

  function terms() {
    return (
      <CheckBoxContainer>
        <CheckBoxItem>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            style={{ marginRight: 10 }}
            onCheckColor={COLORS.primary}
            onTintColor={COLORS.primary}
            tintColors={{
              true: COLORS.primary
            }}
          />
          <Text style={{ ...FONTS.body3, textAlign: 'justify', color: COLORS.lightGray2 }}>
            Autorizo a Wbeaut a me atualizar sobre promoções, ofertas e outras atualizações por e-mail, SMS ou WhatsApp.</Text>
        </CheckBoxItem>
        <CheckBoxItem>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            style={{ marginRight: 10 }}
            onCheckColor={COLORS.primary}
            onTintColor={COLORS.primary}
            tintColors={{
              true: COLORS.primary
            }}
          />
          <Text style={{ ...FONTS.body3, textAlign: 'justify', color: COLORS.lightGray2 }}>
            Li e concordo com os termos e condições de uso e políticas de privacidade.</Text>
        </CheckBoxItem>
        <CheckBoxItem>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            style={{ marginRight: 10 }}
            onCheckColor={COLORS.primary}
            onTintColor={COLORS.primary}
            tintColors={{
              true: COLORS.primary
            }}
          />
          <Text style={{ ...FONTS.body3, textAlign: 'justify', color: COLORS.lightGray2 }}>Estou ciente que o tratamento de meus dados pessoais poderá ocorrer fora do Brasil.
        </Text>
        </CheckBoxItem>
      </CheckBoxContainer>
    );
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
            {/* Radius button type user */}
            {typeUsers()}
            <View style={{ height: 36 }} />

            {/* Check box main goal */}
            {mainGoal()}
            <View style={{ height: 50 }} />

            {/* Accept terms */}
            {terms()}

            <ButtonComponent text="Avançar" onPress={() => { }} />

          </ContainerComponent>
          <View style={{ height: 30 }} />
        </Scroller>
      </KeyboardAvoidingView>
    </Container>
  );
};

const styles = StyleSheet.create({
  typeSelected: {

  },
  typeNotSelected: {

  }
})
