import "styled-components";
import type { AppTheme } from "../theme/tokens";

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
