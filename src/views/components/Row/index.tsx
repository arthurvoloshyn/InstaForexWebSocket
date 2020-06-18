import React, { FC, ReactElement } from 'react';
import { View } from 'react-native';
import Themes from '../../../constants/themes';
import { isNumber } from '../../../utils';
import AppText from '../AppText';
import { IDataListItemValue } from '../../../types';
import { IProps, IChangeStyles } from './types';
import styles from './styles';

const Row: FC<IProps> = ({
  title,
  isNegative,
  value = 'Unknown',
}): ReactElement => {
  const isSymbol: boolean = title === 'Symbol';
  const isChange: boolean = title === 'Change';

  const baseStyles = isSymbol ? styles.symbol : styles.infoText;
  const isPositiveNumber: boolean =
    isNumber<IDataListItemValue>(value) && !isNegative;
  const changeStyles: IChangeStyles = isChange
    ? { color: isNegative ? Themes.dangerColor : Themes.successColor }
    : {};
  const textValue: IDataListItemValue =
    isChange && isPositiveNumber ? `+${value}` : value;

  return (
    <View style={styles.textContainer}>
      <AppText style={[baseStyles, changeStyles]} bold={isSymbol}>
        {textValue}
      </AppText>
    </View>
  );
};

export default Row;
