import React, { FC, ReactNode } from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';

type Props = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  bold?: boolean;
};

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
