import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  marginSmall: 5,
  marginBase: 10,
  marginMedium: 15,
  marginLarge: 20,
  marginBig: 25,
  paddingHorizontal: 10,
  paddingVertical: 10,
  paddingSmall: 5,
  paddingBase: 10,
  paddingMedium: 15,
  paddingLarge: 20,
  paddingBig: 25,
  section: 25,
  sectionDouble: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  borderRadius: 4,
  icons: {
    tiny: 12,
    small: 16,
    base: 18,
    medium: 20,
    large: 24,
    xl: 28
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  }
}

export default metrics
