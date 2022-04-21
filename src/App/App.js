/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable consistent-return */
/* eslint-disable space-before-function-paren */
import React from 'react';
import './App.css';
import AppBar from '../components/AppBar';
import Container from '../components/Container';

function App() {
  return (
    <div className='App'>
      <AppBar />
      <Container/>
    </div>
  );
}

export default App;
