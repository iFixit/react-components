import type { ThemeOverride } from '@chakra-ui/react';
import { fontFamily } from '@core-ds/primitives';

export const fonts: ThemeOverride['fonts'] = {
   body: fontFamily.lato,
   heading: fontFamily.lato,
   mono: fontFamily.monoSystem,
};
