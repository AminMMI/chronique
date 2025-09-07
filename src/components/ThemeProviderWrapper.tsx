"use client";

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { ReactNode } from 'react';

const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#ff4081',
    background: '#f5f5f5',
    text: '#333',
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen;
  }
`;

export default function ThemeProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
