import {
   Box,
   BoxProps,
   Flex,
   FlexProps,
   forwardRef,
   HStack,
   Icon,
   List,
   ListIcon,
   ListItem,
   ListItemProps,
   ListProps,
   MenuButton,
   MenuButtonProps,
   MenuItem,
   MenuItemProps,
   StackProps,
   Text,
   TextProps,
} from '@chakra-ui/react';
import * as React from 'react';

export const Footer = forwardRef<FlexProps, 'footer'>(({ children, ...otherProps }, ref) => {
   return (
      <Flex
         ref={ref}
         as="footer"
         direction="column"
         bg="trueGray.900"
         color="white"
         {...otherProps}
      >
         {children}
      </Flex>
   );
});

export const FooterMenuList = forwardRef<ListProps, 'ul'>(({ children, ...otherProps }, ref) => {
   return (
      <List
         ref={ref}
         pb={{
            base: 4,
            sm: 0,
         }}
         borderBottomWidth={{
            base: 'thin',
            sm: 0,
         }}
         borderBottomColor="trueGray.700"
         {...otherProps}
      >
         {children}
      </List>
   );
});

export const FooterMenuItem = (props: ListItemProps) => {
   return <ListItem py="1" fontSize="sm" fontWeight="black" color="trueGray.300" {...props} />;
};

export type FooterMenuItemLinkProps = BoxProps & {
   icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

export const FooterMenuLink = forwardRef<FooterMenuItemLinkProps, 'a'>(
   ({ icon, children, ...otherProps }, ref) => {
      return (
         <Box
            ref={ref}
            as="a"
            cursor="pointer"
            transition="all 400ms"
            _hover={{
               color: 'white',
            }}
            {...otherProps}
         >
            {icon && <ListIcon as={icon} boxSize="4" filter="opacity(0.5)" />}
            {children}
         </Box>
      );
   }
);

export type FooterLinkProps = StackProps & {
   icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

export const FooterLink = forwardRef<FooterLinkProps, 'a'>(
   ({ children, icon, ...otherProps }, ref) => {
      return (
         <HStack
            ref={ref}
            as="a"
            align="center"
            color="trueGray.300"
            transition="color 300ms"
            _hover={{ color: 'white' }}
            {...otherProps}
         >
            <Text fontSize="sm" lineHeight="1em" fontWeight="semibold">
               {children}
            </Text>
            {icon && <Icon as={icon} boxSize="6" filter="opacity(0.5)" />}
         </HStack>
      );
   }
);

export const StoreMenuItem = forwardRef<MenuItemProps, 'div'>(
   ({ children, ...otherProps }, ref) => {
      return (
         <MenuItem ref={ref} fontSize="sm" color="black" {...otherProps}>
            <Flex w="full" align="center">
               {children}
            </Flex>
         </MenuItem>
      );
   }
);

export const StoreName = forwardRef<TextProps, 'p'>((props, ref) => {
   return <Text ref={ref} ml="3" mt="-1px" flexGrow={1} {...props} />;
});

export const StoreCurrency = forwardRef<TextProps, 'p'>((props, ref) => {
   return <Text ref={ref} ml="2" mt="-1px" color="trueGray.500" {...props} />;
});

export const StoreFlagBackdrop = (props: BoxProps) => {
   return <Box p="1.5" borderRadius="base" bg="trueGray.800" {...props} />;
};

export type StoreMenuButtonProps = MenuButtonProps & {
   icon?: React.ReactNode;
};

export const StoreMenuButton = forwardRef<StoreMenuButtonProps, 'button'>(
   ({ children, icon, ...otherProps }, ref) => {
      return (
         <MenuButton ref={ref} color="trueGray.300" _hover={{ color: 'white' }} {...otherProps}>
            <HStack alignItems="center">
               <Text color="inherit" fontSize="sm" lineHeight="1em" fontWeight="semibold">
                  {children}
               </Text>
               {icon}
            </HStack>
         </MenuButton>
      );
   }
);

export const FooterPartnerLink = forwardRef<BoxProps, 'a'>(({ children, ...otherProps }, ref) => {
   return (
      <Box
         ref={ref}
         as="a"
         bg="trueGray.800"
         opacity="0.5"
         h="48px"
         p="4"
         borderRadius="md"
         cursor="pointer"
         transition="all 400ms"
         _hover={{
            opacity: '0.7',
         }}
         {...otherProps}
      >
         {children}
      </Box>
   );
});
