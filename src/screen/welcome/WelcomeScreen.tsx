import React, { memo, useCallback } from 'react';
import { View } from 'react-native';

import { Button, Screen } from '../../component';
import { useNavigation } from '../../hooks';
import {
  ButtonContainer,
  Cat,
  Container,
  Paragraph,
  RelaxMessage,
  Title,
} from './WelcomeScreen.styledComponents';

const LurkingCat = require('./resources/lurking-cat.json');

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const onPress = useCallback(() => {
    navigation.openInstrumentList();
  }, [navigation]);

  return (
    <Screen>
      <Container>
        <View>
          <Title>Nordnet Mob App</Title>
          <Paragraph>
            We are going to do the task as a team, there is no pressure on finishing the task, that
            is not what is important. We are just going to work together for a while.
          </Paragraph>
          <RelaxMessage>Relax and enjoy!</RelaxMessage>
        </View>
        <Cat source={LurkingCat} autoPlay loop />
        <ButtonContainer>
          <Button onPress={onPress} label="Lets get started!" />
        </ButtonContainer>
      </Container>
    </Screen>
  );
};

export default memo(WelcomeScreen);
