import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Content/content';
import Header from './Header/header';

function App() {
  return (
    <div className="App">
      <div>
      <Header></Header>
      </div>
      <div className="content_top"> 
      <Content></Content>
      </div>
     
     
      {/* <Footer></Footer> */}
      
    </div>
  );
}

export default App;
