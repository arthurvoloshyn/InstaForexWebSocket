import React, {FC} from 'react';
import { View, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import Themes from '../../../constants/themes';
import OS from '../../../services/detectDeviceOS';
import AppText from '../AppText';
import { Props } from './types';
import styles from './styles';

const AppButton: FC<Props> = ({ children, onPress, backgroundColor, activeOpacity, ...attrs }) => {
  const Wrapper = OS.isAndroid ? TouchableNativeFeedback : TouchableOpacity;
  const buttonStyles = { backgroundColor };

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

AppButton.defaultProps = {
  onPress: () => {},
  backgroundColor: Themes.primaryColor,
  activeOpacity: 0.7,
};

export default AppButton;