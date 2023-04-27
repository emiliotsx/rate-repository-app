import { Platform } from "react-native"

const theme = {
  appBar: {
    primary: '#24292e',
    textPrimary: '#fff',
    textSecondary: '#999',
  },
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#048f1b',
    white: '#ffff'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'System',
      ios: 'System',
      web: 'Roboto',
      default: 'Roboto',
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700'
  }
}

export default theme