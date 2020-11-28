import { React } from 'react';
import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textWhite: '#FFFFFF',
    textBlack: '#000000',
    primary: '#0366d6',
    appBarBackgroundColor: '#24292e',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 20,
  },
  fonts: {
    main: Platform.select({
        android: 'Roboto',
        ios: 'Arial',
        default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;