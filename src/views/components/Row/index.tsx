import React, { FC } from 'react';
import { View } from 'react-native';
import { isNumber } from "../../../utils";
import AppText from '../AppText';
import { IChangeStyles, ITextValue } from "../Quote/types";
import { IProps } from './types';
import styles from './styles';

const Row: FC<IProps> = ({
    title,
    isNegative,
    value = 'Unknown'
}) => {
    const isSymbol: boolean = title === 'Symbol';
    const isChange: boolean = title === 'Change';

    const baseStyles = isSymbol ? styles.symbol : styles.infoText;
    const isPositiveNumber: boolean = isNumber(value) && !isNegative;
    const changeStyles: IChangeStyles = isChange ? { color: isNegative ? '#8e2b2b' : '#008000' } : {};
    const textValue: ITextValue = isChange && isPositiveNumber ? `+${value}` : value;

    return (
        <View style={styles.textContainer}>
            <AppText style={[baseStyles, changeStyles]} bold={isSymbol}>{textValue}</AppText>
        </View>
    );
};

export default Row;
