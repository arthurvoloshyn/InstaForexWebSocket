import React, { memo, FC } from 'react';
import { Animated, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Themes from '../../../constants/themes';
import Lists from '../../../constants/lists';
import { getDataListWithValues } from '../../../utils';
import useAnimation from '../../../hooks/useAnimation';
import Row from '../Row';
import { IDataListItem } from '../../../types';
import { IProps } from './types';
import styles from './styles';

const Quote: FC<IProps> = ({ quote }) => {
  const [backgroundColor] = useAnimation<number>(quote.change);
  const isNegative: boolean = quote.change < 0;

  const animatedStyle = { backgroundColor };
  const quotesList: IDataListItem[] = getDataListWithValues(Lists.quoteList, quote);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {quotesList.map(({ title, value }) => (
        <Row key={title} title={title} value={value} isNegative={isNegative} />
      ))}

      <View style={styles.changeFieldContainer}>
        <Icon
          color={isNegative ? Themes.dangerColor : Themes.successColor}
          name={`chevron-${isNegative ? 'down' : 'up'}`}
          style={styles.icon}
        />
      </View>
    </Animated.View>
  );
};

export default memo(Quote);
