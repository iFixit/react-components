import { Icon, IconProps, forwardRef } from '@chakra-ui/react';
import * as React from 'react';
import { AuFlag, CaFlag, DeFlag, EuFlag, FrFlag, GbFlag, UsFlag } from '../../icons';

export enum CountryCode {
   AU = 'AU',
   CA = 'CA',
   DE = 'DE',
   FR = 'FR',
   GB = 'GB',
   EU = 'EU',
   US = 'US',
}

export type FlagIconProps = IconProps & {
   code?: CountryCode;
};

export const FlagIcon = forwardRef<FlagIconProps, 'svg'>(({ code, ...otherProps }, ref) => {
   switch (code) {
      case CountryCode.AU:
         return (
            <Icon ref={ref} as={AuFlag} data-country-code={code} display="block" {...otherProps} />
         );
      case CountryCode.CA:
         return (
            <Icon ref={ref} as={CaFlag} data-country-code={code} display="block" {...otherProps} />
         );
      case CountryCode.DE:
         return (
            <Icon ref={ref} as={DeFlag} data-country-code={code} display="block" {...otherProps} />
         );
      case CountryCode.FR:
         return (
            <Icon ref={ref} as={FrFlag} data-country-code={code} display="block" {...otherProps} />
         );
      case CountryCode.GB:
         return (
            <Icon ref={ref} as={GbFlag} data-country-code={code} display="block" {...otherProps} />
         );
      case CountryCode.EU:
         return (
            <Icon ref={ref} as={EuFlag} data-country-code={code} display="block" {...otherProps} />
         );
      case CountryCode.US:
      default:
         return (
            <Icon ref={ref} as={UsFlag} data-country-code={code} display="block" {...otherProps} />
         );
   }
});
