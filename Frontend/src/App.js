import * as React from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import './App.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Store from './components/Store';

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "green",
      },
    }),
  },
});

function App() {
  return (
    <Store>
      <ChakraProvider theme={theme}>
        <Navbar></Navbar>
        <Body></Body>
      </ChakraProvider>
    </Store>

  );
}

export default App;
