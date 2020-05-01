import React, {FC, useEffect, useState, memo} from 'react';
import {View, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppText from "../AppText";
import { IProps, IAnimatedStyle } from './types';
import styles from './styles';

const Quote: FC<IProps> = ({ quota }) => {
    const value = new Animated.Value(0);
    const [animatedValue, setAnimatedValue] = useState(value);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      setAnimatedValue(value);
    });
  }, [quota.change]);

  const interpolateColor = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [
      'transparent',
      quota.change > 0 ? '#008000' : '#8e2b2b',
      'transparent',
    ],
  });

  const animatedStyle: IAnimatedStyle = {
    backgroundColor: interpolateColor
  };
  const isNegative: boolean = quota.change < 0;

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
        <View style={styles.textContainer}>
            <AppText style={styles.symbol}>{quota.symbol}</AppText>
        </View>

        <View style={styles.textContainer}>
            <AppText style={styles.infoText}>{quota.ask}</AppText>
        </View>

        <View style={styles.textContainer}>
            <AppText style={styles.infoText}>{quota.bid}</AppText>
        </View>

        <View style={styles.textContainer}>
          <AppText
              style={[
                styles.infoText,
                // eslint-disable-next-line react-native/no-inline-styles
                {color: isNegative ? '#8e2b2b' : '#008000'},
              ]}>
            {isNegative ? quota.change : `+${quota.change}`}
          </AppText>
        </View>

        <View style={styles.changeFieldContainer}>
          <Icon
              color={isNegative ? '#8e2b2b' : '#008000'}
              name={`chevron-${isNegative ? 'down' : 'up'}`}
              style={styles.icon}
          />
        </View>
    </Animated.View>
  );
};

export default memo(Quote);
