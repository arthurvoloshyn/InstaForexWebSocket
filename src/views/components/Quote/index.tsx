import React, { useEffect, useState, memo, FC } from 'react';
import { View, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Themes from "../../../constants/themes";
import Lists from "../../../constants/lists";
import { getDataListWithValues } from '../../../utils';
import { IDataListItem } from "../../../types";
import Row from '../Row';
import { IProps } from './types';
import styles from './styles';

const Quote: FC<IProps> = ({ quote }) => {
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
  }, [quote.change]);

  const interpolateColor = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [
      'transparent',
        quote.change > 0 ? Themes.successColor : Themes.dangerColor,
      'transparent',
    ],
  });

  const animatedStyle = { backgroundColor: interpolateColor };
  const isNegative: boolean = quote.change < 0;
  const quotesList: IDataListItem[] = getDataListWithValues(Lists.quoteList, quote);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
        {quotesList.map(({ title, value }: IDataListItem) => (
            <Row key={title} title={title} value={value} isNegative={isNegative} />
        ))}

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
