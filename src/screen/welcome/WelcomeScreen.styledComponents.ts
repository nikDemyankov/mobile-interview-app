import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

export const Container = styled.View({
  height: '100%',
  justifyContent: 'space-between',
  paddingVertical: 24,
});

export const Title = styled.Text({
  marginBottom: 16,
  fontSize: 32,
  fontWeight: 'bold',
  paddingHorizontal: 32,
  textAlign: 'center',
});

export const Paragraph = styled.Text({
  fontSize: 16,
  paddingHorizontal: 32,
  lineHeight: '24px', // px just to silence the styled-components warning
  textAlign: 'center',
});

export const RelaxMessage = styled.Text({
  marginTop: 12,
  fontSize: 16,
  paddingHorizontal: 32,
  lineHeight: '24px', // px just to silence the styled-components warning
  fontWeight: 'bold',
  textAlign: 'center',
});

export const Cat = styled(LottieView)({
  width: '100%',
});

export const ButtonContainer = styled.View({
  alignItems: 'center',
});
