import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@storybook/addon-console';
import * as React from 'react';
import { theme } from '../src';

export const parameters = {
   actions: { argTypesRegex: '^on[A-Z].*' },
   options: {
      storySort: {
         method: 'alphabetical',
      },
   },
   controls: { expanded: true },
};

const customTheme = extendTheme(theme);

const withChakra = (StoryFn: Function) => {
   return (
      <ChakraProvider theme={customTheme}>
         <StoryFn />
      </ChakraProvider>
   );
};

export const decorators = [withChakra];
