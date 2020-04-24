import React, {useEffect, useState} from 'react';
import {View, Text, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IQuota} from '../../types';
import styles from './styles';

type Props = {
  quota: IQuota;
};

export const ListItem = React.memo(({quota}: Props) => {
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
      quota.change > 0 ? '#99ff99' : '#ff6666',
      'transparent',
    ],
  });

  const animatedStyle = {
    backgroundColor: interpolateColor,
  };
  const isNegative = quota.change < 0;

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <View style={styles.leftContent}>
        <Text style={styles.symbol}>{quota.symbol}</Text>
      </View>
      <View style={styles.rightContent}>
        <View style={styles.textContainer}>
          <Text style={styles.infoText}>{quota.ask}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.infoText}>{quota.bid}</Text>
        </View>
        <View style={styles.changeFieldContainer}>
          <Text
            style={[
              styles.infoText,
              // eslint-disable-next-line react-native/no-inline-styles
              {color: isNegative ? 'red' : 'green'},
            ]}>
            {`${quota.change}%`}
          </Text>
          <Icon
            color={isNegative ? 'red' : 'green'}
            name={`chevron-${isNegative ? 'down' : 'up'}`}
            style={styles.icon}
          />
        </View>
      </View>
    </Animated.View>
  );
});
