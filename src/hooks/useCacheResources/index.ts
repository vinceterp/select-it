import { Asset } from 'expo-asset'

export function useCacheResources(): {
  cacheResources: () => Promise<Asset[]>
} {
  const cacheResources = () => {
    const images = [
      require('../../assets/loginBackground_A.png'),
      require('../../assets/select_it_logo.png'),
      require('../../assets/google_icon.png'),
      require('../../assets/facebook_icon.png'),
      require('../../assets/home_icon.png'),
      require('../../assets/addsound_icon.png'),
      require('../../assets/help_icon.png'),
      require('../../assets/settings_icon.png'),
      require('../../assets/home_icon_focused.png'),
      require('../../assets/addsound_icon_focused.png'),
      require('../../assets/help_icon_focused.png'),
      require('../../assets/settings_icon_focused.png'),
    ]

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync()
    })
    return Promise.all(cacheImages)
  }

  return { cacheResources }
}
