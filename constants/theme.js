import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')


export const COLORS = {
  // base colors
  primary: '#4C9462',
  secondary: '#77B085',
  tertiary: '#B4DEBA',
  quaternary: '#B7DFBD',

  //colors
  black: '#000000',
  white: '#FFFFFF',

  lightGray: '#464646',
  lightGray2: '#B0B0B0',
  lightGray3: '#C8C8C8',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 3,
  radius2: 21,
  padding: 19,
  padding2: 26,
  padding3: 40,

  // text Size
  largeTitle: 29,
  h1: 20,
  h2: 19,
  h3: 14,
  body: 14,
  body2: 13,
  body3: 8,
  button: 15,
  button2: 14,
  button3: 11,
  placeholde: 14,

  //app dimensions
  width,
  height,
}

export const FONTS = {
  largeTitle: { fontFamily: "Poppins-Medium", fontSize: SIZES.largeTitle },
  h1: { fontFamily: "Poppins-Medium", fontSize: SIZES.h1 },
  h2: { fontFamily: "Poppins-Regular", fontSize: SIZES.h2, lineHeight: 14 },
  h3: { fontFamily: "Poppins-Regular", fontSize: SIZES.h3, lineHeight: 13 },
  h3: { fontFamily: "Poppins-Regular", fontSize: SIZES.h3, lineHeight: 13 },
  body: { fontFamily: "Poppins-Regular", fontSize: SIZES.body, lineHeight: 15 },
  body2: { fontFamily: "Poppins-Regular", fontSize: SIZES.body2 },
  body3: { fontFamily: "Poppins-Light", fontSize: SIZES.body2},
  body4: { fontFamily: "Poppins-Regular", fontSize: SIZES.body3, lineHeight: 12 },
  button: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.button, lineHeight: 15 },
  button2: { fontFamily: "Poppins-Regular", fontSize: SIZES.button2, lineHeight: 17 },
  button3: { fontFamily: "Poppins-Regular", fontSize: SIZES.button3, lineHeight: 12 },
  placeholde: { fontFamily: "Poppins-Regular", fontSize: SIZES.placeholde },
}

const appTheme = { COLORS, SIZES, FONTS }

export default appTheme;
