import React from 'react';
import './App.css';
import Container from './components/container';
import Header from './components/header';

function App(): JSX.Element {
  return (
    <main>
      <Header />
      <Container />
    </main>
  );
}

export default App;
