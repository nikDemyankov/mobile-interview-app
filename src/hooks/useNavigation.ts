import { useMemo } from 'react';
import { useNavigation as useNavigationDefault } from '@react-navigation/native';
import R from 'ramda';

type AppNavigation = {
  openInstrumentList: (props?: Record<string, unknown>) => void;
};

const ROUTES = {
  openInstrumentList: 'InstrumentList',
};

const useNavigation = (): AppNavigation => {
  const navigation = useNavigationDefault();
  const appNavigation: AppNavigation = useMemo(
    () =>
      R.mapObjIndexed(
        (route: string) => (props?: Record<string, unknown>) => navigation.navigate(route, props),
        ROUTES,
      ),
    [navigation],
  );

  return appNavigation;
};

export default useNavigation;
