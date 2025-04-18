import 'styled-components';

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

  export interface StyledComponentBase<
    C extends string | React.ComponentType<any>,
    T extends object,
    O extends object = {},
    A extends keyof any = never
  > extends React.FC<O & A> {
    withComponent<C2 extends string | React.ComponentType<any>>(
      component: C2
    ): StyledComponentBase<C2, T, O, A>;
  }

  export function styled<T extends object = DefaultTheme>(
    tag: TemplateStringsArray | string | React.ComponentType<any>,
    ...styles: any[]
  ): StyledComponentBase<any, T>;
} 