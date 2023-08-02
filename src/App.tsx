import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Root from 'pages';
import { theme } from 'themes';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Root />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
