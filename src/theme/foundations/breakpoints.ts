import type { ThemeOverride } from '@chakra-ui/react';
import { breakpoint } from '@core-ds/primitives';

export const breakpoints: ThemeOverride['breakpoints'] = {
   base: '0em',
   sm: breakpoint.sm, // 576px
   md: breakpoint.md, // 768px
   lg: breakpoint.lg, // 1000px
   xl: breakpoint.xl, // 1200px
   '2xl': '1536px',
};
