import React from 'react';
import ChildCompenent from './ChildCompenent';

const Parent = () => {
    const message = "Hello, Child!"
  return (
    <ChildCompenent greeting ={message}/>
  )
}

export default Parent