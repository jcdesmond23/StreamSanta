import * as React from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import './App.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

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
    <div>
      <ChakraProvider theme={theme}>
        <Navbar></Navbar>
        <Body></Body>
      </ChakraProvider>
    </div>

  );
}

export default App;
