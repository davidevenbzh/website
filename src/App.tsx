import React from 'react';
import './App.css';
import { version } from 'pkginfo';

function App(): JSX.Element {
  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-3xl font-bold text-center'>David Even</h1>
      <footer>{version}</footer>
    </div>
  );
}

export default App;
