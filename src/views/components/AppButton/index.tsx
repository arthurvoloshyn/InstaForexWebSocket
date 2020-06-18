import React, { FC, ElementType, ReactElement } from 'react';
import { View, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import Themes from '../../../constants/themes';
import OS from '../../../services/detectDeviceOS';
import AppText from '../AppText';
import { IProps, IButtonStyle } from './types';
import styles from './styles';

const AppButton: FC<IProps> = ({
  children,
  onPress,
  activeOpacity = 0.7,
  backgroundColor = Themes.primaryColor,
  ...attrs
}): ReactElement => {
  const Wrapper: ElementType = OS.isAndroid
    ? TouchableNativeFeedback
    : TouchableOpacity;
  const buttonStyles: IButtonStyle = { backgroundColor };

  return (
    <Wrapper onPress={onPress} activeOpacity={activeOpacity} {...attrs}>
      <View style={[styles.button, buttonStyles]}>
        <AppText bold style={styles.text}>
          {children}
        </AppText>
      </View>
    </Wrapper>
  );
};

export default AppButton;
