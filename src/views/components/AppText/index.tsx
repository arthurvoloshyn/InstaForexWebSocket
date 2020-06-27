import React, { FC, ReactElement } from 'react';
import { Text, TextProps } from 'react-native';
import { IProps, ITextStyle } from './types';

const AppText: FC<IProps> = ({
  children,
  bold,
  style,
  ...attrs
}): ReactElement => {
  const textStyles: ITextStyle = {
    fontFamily: bold ? 'roboto-bold' : 'roboto-regular',
  };

  return (
    <Text style={[textStyles, style]} {...(attrs as TextProps)}>
      {children}
    </Text>
  );
};

export default AppText;
