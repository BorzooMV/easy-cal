import React from 'react';
import Keypad from './components/Keypad/Keypad';
import Screen from './components/Screen/Screen';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Screen />
      <Keypad />
      <Footer />
    </div>
  );
}

export default App;
