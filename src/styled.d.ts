import 'styled-components'
import { Theme as AppTheme } from './styles/themes/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
