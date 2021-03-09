import React, { memo, useCallback } from 'react';
import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

import { Button, Screen } from '../../component';
import styles from './WelcomeScreen.styles';
import { useNavigation } from '../../hooks';

const LurkingCat = require('./resources/lurking-cat.json');

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const onPress = useCallback(() => {
    navigation.openInstrumentList();
  }, [navigation]);

  return (
    <Screen>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Nordnet Mob App</Text>
          <Text style={styles.paragraph}>
            We are going to do the task as a team, there is no pressure on finishing the task, that
            is not what is important. We are just going to work together for a while.
          </Text>
          <Text style={styles.relax}>Relax and enjoy!</Text>
        </View>
        <LottieView source={LurkingCat} autoPlay loop style={styles.lurkingCat} />
        <View style={styles.button}>
          <Button onPress={onPress} label="Lets get started!" />
        </View>
      </View>
    </Screen>
  );
};

export default memo(WelcomeScreen);
