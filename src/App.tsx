import React from 'react';
import logo from './logo.svg';
import './App.css';
import Route from './route';
import Layout from './layout';
function App() {
  return (
    <Layout body={<Route />} />
  );
}

export default App;
