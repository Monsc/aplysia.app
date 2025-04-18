import * as CSS from 'csstype';
import * as React from 'react';

declare module 'styled-components' {
  export interface DefaultTheme {
    // Add your theme properties here
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
  }

  export interface ThemedStyledComponentsModule<T> {
    default: ThemedStyledInterface<T>;
    css: ThemedCssFunction<T>;
    // ... other styled-components exports
  }

  export interface ThemedStyledInterface<T> {
    <C extends keyof JSX.IntrinsicElements | React.ComponentType<any>>(
      component: C
    ): ThemedStyledFunction<C, T>;
    <C extends keyof JSX.IntrinsicElements | React.ComponentType<any>>(
      component: C,
      options: StyledOptions<any>
    ): ThemedStyledFunction<C, T>;
  }

  export type ThemedStyledFunction<
    C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
    T extends object
  > = {
    <P extends object = {}>(
      strings: TemplateStringsArray,
      ...interpolations: Interpolation<ThemedStyledProps<P, T>>[]
    ): StyledComponent<C, T, P>;
    attrs<U, NewP extends P = P>(
      attrs: Attrs<P, T, U>
    ): ThemedStyledFunction<C, T>;
  };

  export interface StyledComponent<
    C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
    T extends object,
    O extends object = {}
  > extends React.FC<ThemedStyledProps<React.ComponentProps<C>, T> & O> {
    // ... other styled-component specific props
  }

  export type ThemedStyledProps<P, T> = P & { theme: T };
  export type Interpolation<P> = ((props: P) => string | number | undefined) | string | number;
  export type Attrs<P, T, U> = ((props: ThemedStyledProps<P, T>) => U) | U;
  export type StyledOptions<T> = { attrs?: Attrs<any, any, T> };
  export type ThemedCssFunction<T> = (
    strings: TemplateStringsArray,
    ...interpolations: Interpolation<ThemedStyledProps<{}, T>>[]
  ) => string;

  const styled: ThemedStyledInterface<DefaultTheme>;
  export default styled;
} 