import { Text, TextProps, TextStyle } from 'react-native';
import { useUserPref } from '../../../contexts';
import { COLORS, styles } from '../../../styles';

export interface Properties extends TextProps {
  label: string;
  size: 'XS' | 'S' | 'M' | 'L';
  color?: string;
  style?: TextStyle;
  underline?: boolean;
}

export default function Label({
  label,
  size,
  color,
  style,
  underline,
  ...rest
}: Properties) {
  const { darkMode } = useUserPref();

  let fontSize: number;
  switch (size) {
    case 'XS':
      fontSize = 12;
      break;
    case 'S':
      fontSize = 15;
      break;
    case 'M':
      fontSize = 18;
      break;
    case 'L':
      fontSize = 21;
      break;
  }

  return (
    <Text
      style={{
        ...styles.app({
          darkMode,
          basicTextColor: color ?? COLORS.WHITE,
          underline,
        }).basicText,
        fontSize,
        ...style,
      }}
      {...rest}
    >
      {label}
    </Text>
  );
}
