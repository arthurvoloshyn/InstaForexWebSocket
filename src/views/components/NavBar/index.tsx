import React, {FC} from 'react';
import { View } from 'react-native';
import { Props } from './types';
import AppText from '../AppText';
import styles from './styles';

const NavBar: FC<Props> = ({ title }) => (
    <View style={styles.navbar} >
        <AppText bold style={styles.text}>{title}</AppText>
    </View>
);

NavBar.defaultProps = {
    title: 'Simple title',
};

export default NavBar;
