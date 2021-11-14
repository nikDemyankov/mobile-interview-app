import React from 'react';
import styled from 'styled-components/native';
import { color } from '../../ui/theme';

const Container = styled.SafeAreaView({
  flex: 1,
  backgroundColor: color.background,
});

const ChildrenContainer = styled.View({
  paddingHorizontal: 10,
  paddingVertical: 10,
});

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const Screen: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
};

export default Screen;
