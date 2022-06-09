import { ReactNode } from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
} from 'react-native';
import { useUserPref } from '../../../contexts';
import { COLORS, styles } from '../../../styles';
import { Label } from '../Label';

export interface ButtonProperties extends TouchableOpacityProps {
  buttonTheme: 'login' | 'sso-button' | 'primary';
  title: string;
  icon?: ReactNode;
  width?: string | number;
}

export default function Button(properties: ButtonProperties) {
  const { buttonTheme, title, icon } = properties;
  const { darkMode } = useUserPref();

  switch (buttonTheme) {
    case 'login':
      return (
        <TouchableOpacity
          style={styles.app({ ...properties, darkMode }).loginButton}
          {...properties}
        >
          <Label label={title} size="S" />
        </TouchableOpacity>
      );
    case 'sso-button':
      return (
        <TouchableOpacity
          style={styles.app({ ...properties, darkMode }).ssoButton}
          {...properties}
        >
          <View
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {icon && (
              <View style={styles.app({}).buttonIconContainer}>{icon}</View>
            )}
            <Label label={title} size="S" color={COLORS.BLACK} />
          </View>
        </TouchableOpacity>
      );
    case 'primary':
      return (
        <View style={styles.app({}).primaryButtonContainer}>
          <TouchableOpacity
            style={styles.app({ ...properties, darkMode }).primaryButton}
            {...properties}
          >
            <View
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              {icon && (
                <View style={styles.app({}).primaryButtonIconContainer}>
                  {icon}
                </View>
              )}
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  marginRight: icon ? 6 : 0,
                }}
              >
                <Label
                  label={title}
                  size="XS"
                  color={COLORS.WHITE}
                  marginLeft="auto"
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      );
  }
}
