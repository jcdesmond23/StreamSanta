import * as React from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Navbar></Navbar>
      <Body></Body>
    </ChakraProvider>
  );
}

export default App;
