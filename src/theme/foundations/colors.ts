import { ThemeOverride } from '@chakra-ui/react';
import primitives from '@core-ds/primitives';

export const colors: ThemeOverride['colors'] = {
   black: primitives.color.black,
   white: primitives.color.white,
   whiteAlpha: {
      50: 'rgba(255, 255, 255, 0.04)',
      100: 'rgba(255, 255, 255, 0.06)',
      200: 'rgba(255, 255, 255, 0.08)',
      300: 'rgba(255, 255, 255, 0.16)',
      400: 'rgba(255, 255, 255, 0.24)',
      500: 'rgba(255, 255, 255, 0.36)',
      600: 'rgba(255, 255, 255, 0.48)',
      700: 'rgba(255, 255, 255, 0.64)',
      800: 'rgba(255, 255, 255, 0.80)',
      900: 'rgba(255, 255, 255, 0.92)',
   },
   blackAlpha: {
      50: 'rgba(0, 0, 0, 0.04)',
      100: 'rgba(0, 0, 0, 0.06)',
      200: 'rgba(0, 0, 0, 0.08)',
      300: 'rgba(0, 0, 0, 0.16)',
      400: 'rgba(0, 0, 0, 0.24)',
      500: 'rgba(0, 0, 0, 0.36)',
      600: 'rgba(0, 0, 0, 0.48)',
      700: 'rgba(0, 0, 0, 0.64)',
      800: 'rgba(0, 0, 0, 0.80)',
      900: 'rgba(0, 0, 0, 0.92)',
   },
   brand: {
      100: '#EDF6FF',
      200: '#BDDCFF',
      300: '#77B5FF',
      400: '#3B95FF',
      500: '#1975F1',
      600: '#085FD9',
      700: '#004AB3',
      800: '#00368C',
      900: '#002466',
   },
   rose: {
      50: primitives.color.rose[50],
      100: primitives.color.rose[100],
      200: primitives.color.rose[200],
      300: primitives.color.rose[300],
      400: primitives.color.rose[400],
      500: primitives.color.rose[500],
      600: primitives.color.rose[600],
      700: primitives.color.rose[700],
      800: primitives.color.rose[800],
      900: primitives.color.rose[900],
   },
   pink: {
      50: primitives.color.pink[50],
      100: primitives.color.pink[100],
      200: primitives.color.pink[200],
      300: primitives.color.pink[300],
      400: primitives.color.pink[400],
      500: primitives.color.pink[500],
      600: primitives.color.pink[600],
      700: primitives.color.pink[700],
      800: primitives.color.pink[800],
      900: primitives.color.pink[900],
   },
   fuchsia: {
      50: primitives.color.fuchsia[50],
      100: primitives.color.fuchsia[100],
      200: primitives.color.fuchsia[200],
      300: primitives.color.fuchsia[300],
      400: primitives.color.fuchsia[400],
      500: primitives.color.fuchsia[500],
      600: primitives.color.fuchsia[600],
      700: primitives.color.fuchsia[700],
      800: primitives.color.fuchsia[800],
      900: primitives.color.fuchsia[900],
   },
   purple: {
      50: primitives.color.purple[50],
      100: primitives.color.purple[100],
      200: primitives.color.purple[200],
      300: primitives.color.purple[300],
      400: primitives.color.purple[400],
      500: primitives.color.purple[500],
      600: primitives.color.purple[600],
      700: primitives.color.purple[700],
      800: primitives.color.purple[800],
      900: primitives.color.purple[900],
   },
   violet: {
      50: primitives.color.violet[50],
      100: primitives.color.violet[100],
      200: primitives.color.violet[200],
      300: primitives.color.violet[300],
      400: primitives.color.violet[400],
      500: primitives.color.violet[500],
      600: primitives.color.violet[600],
      700: primitives.color.violet[700],
      800: primitives.color.violet[800],
      900: primitives.color.violet[900],
   },
   indigo: {
      50: primitives.color.indigo[50],
      100: primitives.color.indigo[100],
      200: primitives.color.indigo[200],
      300: primitives.color.indigo[300],
      400: primitives.color.indigo[400],
      500: primitives.color.indigo[500],
      600: primitives.color.indigo[600],
      700: primitives.color.indigo[700],
      800: primitives.color.indigo[800],
      900: primitives.color.indigo[900],
   },
   blue: {
      50: primitives.color.blue[50],
      100: primitives.color.blue[100],
      200: primitives.color.blue[200],
      300: primitives.color.blue[300],
      400: primitives.color.blue[400],
      500: primitives.color.blue[500],
      600: primitives.color.blue[600],
      700: primitives.color.blue[700],
      800: primitives.color.blue[800],
      900: primitives.color.blue[900],
      ifixit: primitives.color.blue.ifixit,
   },
   lightBlue: {
      50: primitives.color.lightBlue[50],
      100: primitives.color.lightBlue[100],
      200: primitives.color.lightBlue[200],
      300: primitives.color.lightBlue[300],
      400: primitives.color.lightBlue[400],
      500: primitives.color.lightBlue[500],
      600: primitives.color.lightBlue[600],
      700: primitives.color.lightBlue[700],
      800: primitives.color.lightBlue[800],
      900: primitives.color.lightBlue[900],
   },
   cyan: {
      50: primitives.color.cyan[50],
      100: primitives.color.cyan[100],
      200: primitives.color.cyan[200],
      300: primitives.color.cyan[300],
      400: primitives.color.cyan[400],
      500: primitives.color.cyan[500],
      600: primitives.color.cyan[600],
      700: primitives.color.cyan[700],
      800: primitives.color.cyan[800],
      900: primitives.color.cyan[900],
   },
   teal: {
      50: primitives.color.teal[50],
      100: primitives.color.teal[100],
      200: primitives.color.teal[200],
      300: primitives.color.teal[300],
      400: primitives.color.teal[400],
      500: primitives.color.teal[500],
      600: primitives.color.teal[600],
      700: primitives.color.teal[700],
      800: primitives.color.teal[800],
      900: primitives.color.teal[900],
   },
   emerald: {
      50: primitives.color.emerald[50],
      100: primitives.color.emerald[100],
      200: primitives.color.emerald[200],
      300: primitives.color.emerald[300],
      400: primitives.color.emerald[400],
      500: primitives.color.emerald[500],
      600: primitives.color.emerald[600],
      700: primitives.color.emerald[700],
      800: primitives.color.emerald[800],
      900: primitives.color.emerald[900],
   },
   green: {
      50: primitives.color.green[50],
      100: primitives.color.green[100],
      200: primitives.color.green[200],
      300: primitives.color.green[300],
      400: primitives.color.green[400],
      500: primitives.color.green[500],
      600: primitives.color.green[600],
      700: primitives.color.green[700],
      800: primitives.color.green[800],
      900: primitives.color.green[900],
   },
   lime: {
      50: primitives.color.lime[50],
      100: primitives.color.lime[100],
      200: primitives.color.lime[200],
      300: primitives.color.lime[300],
      400: primitives.color.lime[400],
      500: primitives.color.lime[500],
      600: primitives.color.lime[600],
      700: primitives.color.lime[700],
      800: primitives.color.lime[800],
      900: primitives.color.lime[900],
   },
   yellow: {
      50: primitives.color.yellow[50],
      100: primitives.color.yellow[100],
      200: primitives.color.yellow[200],
      300: primitives.color.yellow[300],
      400: primitives.color.yellow[400],
      500: primitives.color.yellow[500],
      600: primitives.color.yellow[600],
      700: primitives.color.yellow[700],
      800: primitives.color.yellow[800],
      900: primitives.color.yellow[900],
   },
   amber: {
      50: primitives.color.amber[50],
      100: primitives.color.amber[100],
      200: primitives.color.amber[200],
      300: primitives.color.amber[300],
      400: primitives.color.amber[400],
      500: primitives.color.amber[500],
      600: primitives.color.amber[600],
      700: primitives.color.amber[700],
      800: primitives.color.amber[800],
      900: primitives.color.amber[900],
   },
   orange: {
      50: primitives.color.orange[50],
      100: primitives.color.orange[100],
      200: primitives.color.orange[200],
      300: primitives.color.orange[300],
      400: primitives.color.orange[400],
      500: primitives.color.orange[500],
      600: primitives.color.orange[600],
      700: primitives.color.orange[700],
      800: primitives.color.orange[800],
      900: primitives.color.orange[900],
   },
   red: {
      50: primitives.color.red[50],
      100: primitives.color.red[100],
      200: primitives.color.red[200],
      300: primitives.color.red[300],
      400: primitives.color.red[400],
      500: primitives.color.red[500],
      600: primitives.color.red[600],
      700: primitives.color.red[700],
      800: primitives.color.red[800],
      900: primitives.color.red[900],
   },
   warmGray: {
      50: '#fafaf9',
      100: '#f5f5f4',
      200: '#e7e5e4',
      300: '#d6d3d1',
      400: '#a8a29e',
      500: '#78716c',
      600: '#57534e',
      700: '#44403c',
      800: '#292524',
      900: '#1c1917',
   },
   trueGray: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
   },
   gray: {
      50: primitives.color.gray[50],
      100: primitives.color.gray[100],
      200: primitives.color.gray[200],
      300: primitives.color.gray[300],
      400: primitives.color.gray[400],
      500: primitives.color.gray[500],
      600: primitives.color.gray[600],
      700: primitives.color.gray[700],
      800: primitives.color.gray[800],
      900: primitives.color.gray[900],
   },
   coolGray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
   },
   blueGray: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
   },
};
