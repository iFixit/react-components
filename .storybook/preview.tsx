import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@storybook/addon-console';
import * as React from 'react';
import { theme } from '../src';
import prettier from 'prettier/standalone';
import prettierBabel from 'prettier/parser-babel';

export const parameters = {
   actions: { argTypesRegex: '^on[A-Z].*' },
   options: {
      storySort: {
         method: 'alphabetical',
      },
   },
   controls: { expanded: true },
   docs: {
      transformSource: (input) =>
         prettier.format(input, {
            parser: 'babel',
            plugins: [prettierBabel],
         }),
   },
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
