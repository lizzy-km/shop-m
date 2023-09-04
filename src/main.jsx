import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './RTK/store'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { CSSReset, ColorModeProvider, ThemeProvider } from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ChakraProvider>
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
      <CSSReset/>
      <App />

      </ColorModeProvider>
    </ThemeProvider>

    </ChakraProvider>
  </Provider>,
)
