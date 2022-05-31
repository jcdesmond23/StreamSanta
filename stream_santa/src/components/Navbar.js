import * as React from 'react';
import './Navbar.css';
import './Form'
import Form from './Form';
import { Flex } from '@chakra-ui/react'

export default function Navbar() {
  return (
    <Flex direction='column' gap='2' p='10'>
      <Form></Form>
    </Flex>
  );
}