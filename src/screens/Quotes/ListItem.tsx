import React, {FC, useEffect, useState} from 'react';
import {View, Text, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IQuota} from '../../types';
import styles from './styles';

type Props = {
  quota: IQuota;
};

export const ListItem: FC<Props> = React.memo(({ quota }) => {
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      setAnimatedValue(new Animated.Value(0));
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

  const animatedStyle = {
    backgroundColor: interpolateColor,
      color: '#fff'
  };
  const isNegative = quota.change < 0;

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
        <View style={styles.textContainer}>
            <Text style={styles.symbol}>{quota.symbol}</Text>
        </View>

        <View style={styles.textContainer}>
            <Text style={styles.infoText}>{quota.ask}</Text>
        </View>

        <View style={styles.textContainer}>
            <Text style={styles.infoText}>{quota.bid}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text
              style={[
                styles.infoText,
                // eslint-disable-next-line react-native/no-inline-styles
                {color: isNegative ? '#8e2b2b' : '#008000'},
              ]}>
            {quota.change}
          </Text>
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
});
