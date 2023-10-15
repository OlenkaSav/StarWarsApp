import {Dimensions, Platform, PixelRatio} from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

const scale = deviceWidth / 320;

export const getFontSize = (size: number) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    if (Platform.isPad) {
      return Math.round(PixelRatio.roundToNearestPixel(newSize / 2));
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};
