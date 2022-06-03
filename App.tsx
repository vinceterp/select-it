import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { Navigation } from "./src/components/organisms";
import { styles } from "./src/styles/styles";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { AuthenticationProvider, UserPreferencesProvider, useUserPref } from "./src/contexts";
import { useCacheResources } from "./src/hooks";

export default function App() {
  const { darkMode } = useUserPref();
  const { cacheResources } = useCacheResources();

  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await cacheResources();
        await Font.loadAsync({
          Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, [cacheResources, setAppIsReady]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <AuthenticationProvider>
      <UserPreferencesProvider>
        <View
          onLayout={onLayoutRootView}
          style={styles.app({ darkMode }).container}
        >
          <Navigation />
        </View>
      </UserPreferencesProvider>
    </AuthenticationProvider>
  );
}
