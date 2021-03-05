import styled from 'styled-components/native';

import {images, COLORS, SIZES} from '../../../constants'

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  /* justify-content: center; */
  background-color: ${COLORS.white};
`;

export const Scroller = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
  },
}))`
  width: 100%;
`;

export const MarginTop = styled.View``;

export const HeaderContainer = styled.View`
  width: 100%;
  height: 250;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const BackgroundImageHeader = styled.ImageBackground`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ImageLogo = styled.View`
  width: 80%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const BodyContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 90%;
  background-color: ${COLORS.white};
`;

export const TextTitle = styled.Text`
  padding: 10px;
  color: ${COLORS.primary};
`;

export const ButtonSignup = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${COLORS.white};
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-color: ${COLORS.primary};
  border-width: 1px;
  border-radius: ${SIZES.radius};
`;

export const ButtonSignupText = styled.Text`
  font-family: "Poppins-SemiBold";
  font-size: ${SIZES.button};
  line-height: 15px;
  font-weight: bold;
  color: ${COLORS.primary};
`;

export const MessageFotGot = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MessageFotGotText = styled.Text`
  color: ${COLORS.lightGray2};
`;
export const MessageFotGotTextButton = styled.TouchableOpacity`
  padding-left: 5px;
  color: ${COLORS.primary};
`;

export const MessageText = styled.Text`
  margin-top: 30px;
`;

export const EnterWithAnother = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 10px;
  position: relative;
`;

export const EnterWithAnotherDivi = styled.View`
  border: 1px solid ${COLORS.lightGray2};
  width: 100%;
  position: absolute;
`;

export const EnterWithAntherContainer = styled.View`
  background-color: ${COLORS.white};
  padding: 0 5px;
`;

export const EnterWithAntherText = styled.Text`
  color: ${COLORS.lightGray2};
`;
