import type { ThemeOverride } from '@chakra-ui/react';

const sansSystemFontStack = '-apple-system, "Segoe UI", Helvetica, Arial, sans-serif';

export const fonts: ThemeOverride['fonts'] = {
   body: `Lato, ${sansSystemFontStack}`,
   heading: `Lato, ${sansSystemFontStack}`,
   mono: "Monaco, 'Lucida Console', 'Courier New', Courier, monospace",
};
