import { useCallback, useMemo } from 'react';
import { useNavigation as useNavigationDefault } from '@react-navigation/native';

type AppNavigation = {
  openInstrumentList: (props?: Record<string, unknown>) => void;
};

const useNavigation = (): AppNavigation => {
  const navigation = useNavigationDefault();
  const navigate = useCallback(
    (route: string) => (props?: Record<string, unknown>) => navigation.navigate(route, props),
    [navigation],
  );

  const appNavigation = useMemo(
    (): AppNavigation => ({
      openInstrumentList: navigate('InstrumentList'),
    }),
    [navigate],
  );

  return appNavigation;
};

export default useNavigation;
