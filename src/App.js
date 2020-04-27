import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Content/content';
import Header from './Header/header';

function App() {
  return (
    <div className="App">
       <Header></Header>
      <Content></Content>
     
      {/* <Footer></Footer> */}
      
    </div>
  );
}

export default App;
