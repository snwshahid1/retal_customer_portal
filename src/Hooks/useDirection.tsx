import { ReactNode } from "react";
import {ThemeProvider} from "styled-components";
import { useTranslation } from "./useTranslation";

interface DirectionProviderProps {
    children: ReactNode;
}

const ThemeProviderDirection = ({ children }: DirectionProviderProps) => {
    let { biApp } = useTranslation();
    const theme = {
        dir: biApp,
        directionLeft: biApp === 'ltr' ? 'left' : 'right',
        directionRight: biApp === 'ltr' ? 'right' : 'left'
    };
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export { ThemeProviderDirection };
