import * as React from 'react';
import Selector from './Selector';
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='container'>
        <Selector category='Genre' choices={['Horror','Comedy','Action']}/>
        <Selector category='Country' choices={['US','Foreign']}/>
      </div>
    </div>
  );
}