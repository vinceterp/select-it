import { Text } from 'react-native'
import { COLORS, styles } from '../../../styles'

export interface Properties {
  label: string
  size: 'S' | 'M' | 'L'
  color?: string
}

export default function Label({ label, size, color }: Properties) {
  const darkMode = false

  let fontSize: number
  switch (size) {
    case 'S':
      fontSize = 15
      break
    case 'M':
      fontSize = 18
      break
    case 'L':
      fontSize = 21
      break
  }

  return (
    <Text
      style={{
        ...styles.app({ darkMode, basicTextColor: color ?? COLORS.WHITE })
          .basicText,
        fontSize,
      }}
    >
      {label}
    </Text>
  )
}
