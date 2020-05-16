import { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import Themes from '../../constants/themes';
import usePrevious from '../usePrevious';

const useAnimation = <T>(change: T) => {
  const initAnimatedValue = new Animated.Value(0);
  const [animatedValue, setAnimatedValue] = useState(initAnimatedValue);

  const prevChange = usePrevious<T>(change);
  const negativeDirection: boolean = prevChange > change;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 250,
      useNativeDriver: false,
    }).start(() => setAnimatedValue(initAnimatedValue));
  }, [change]); // eslint-disable-line

  const interpolateBackgroundColor = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [
      'transparent',
      negativeDirection ? Themes.lightDangerColor : Themes.lightSuccessColor,
      'transparent',
    ],
  });

  return [interpolateBackgroundColor];
};

export default useAnimation;
