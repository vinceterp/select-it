import { Asset } from 'expo-asset';

export function useCacheResources(): {
  cacheResources: () => Promise<Asset[]>;
} {
  const cacheResources = () => {
    const images = [
      require('../../assets/loginBackground_A.png'),
      require('../../assets/select_it_logo.png'),
      require('../../assets/google_icon.png'),
      require('../../assets/facebook_icon.png'),
      require('../../assets/sg_logo.png'),
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  };

  return { cacheResources };
}
