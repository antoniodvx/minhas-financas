import 'styled-components';

declare module 'style-components' {
    export interface DefaultTheme{
        title: strting;
        colors: {
            primary: strting;
            secondary: strting;
            tertiary: strting;

            white: strting;
            black: strting;
            gray: strting;

            sucess: strting;
            info: strting;
            warning: strting;
        },
    }
}