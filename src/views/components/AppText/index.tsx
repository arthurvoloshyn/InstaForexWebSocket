import React, { FC } from 'react';
import { Text } from 'react-native';
import { Props } from './types';

const AppText: FC<Props> = ({ style, children, bold, ...attrs }) => {
  const textStyles = { fontFamily: bold ? 'roboto-bold' : 'roboto-regular' };

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
