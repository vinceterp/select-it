import { FunctionComponent, ReactElement } from 'react';
import { SvgProps } from 'react-native-svg';

import * as Icons from '../icons';

interface Properties extends SvgProps {
  name: keyof typeof Icons;
}

export const Icon: FunctionComponent<Properties> = ({
  name,
  ...rest
}: Properties): ReactElement<Properties> => {
  const Component = Icons[name];

  return <Component {...rest} />;
};
