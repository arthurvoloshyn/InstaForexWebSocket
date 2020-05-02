import React, { FC } from 'react';
import { Text } from 'react-native';
import { IProps, ITextStyle } from './types';

const AppText: FC<IProps> = ({ style, children, bold, ...attrs }) => {
  const textStyles: ITextStyle = { fontFamily: bold ? 'roboto-bold' : 'roboto-regular' };

  return (
    <Text style={[textStyles, style]} {...attrs}>
      {children}
    </Text>
  );
};

AppText.defaultProps = {
  bold: false,
  style: {},
};

export default AppText;
