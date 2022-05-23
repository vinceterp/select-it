import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { Navigation } from "./src/components/organisms";
import { styles } from "./src/styles/styles";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { AuthenticationProvider } from "./src/contexts";
import { useCacheResources } from "./src/hooks";

export default function App() {
  const darkMode = false;
  const { cacheResources } = useCacheResources();

  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        //load resources here
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
  }, []);

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
      <View
        onLayout={onLayoutRootView}
        style={styles.app({ darkMode }).container}
      >
        <Navigation />
      </View>
    </AuthenticationProvider>
  );
}
