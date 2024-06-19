export const getDesignTokens = (mode: 'light' | 'dark') => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // light mode
          primary: {
            main: '#d50000',
          },
          secondary: {
            main: '#424242',
          },
        }
      : {
          // dark mode
          primary: {
            main: '#d50000',
          },
          secondary: {
            main: '#fafafa',
          },
        }),
  },
});
