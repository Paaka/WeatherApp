import React from 'react';

import './index.css';
import Background from './components/Background';
import Colors from './constants/Colors';
import WeatherWidget from './components/WeatherWidget';



function App() {
  return (
    <Background backgroundColor={Colors.grey}>
        <WeatherWidget/>
    </Background>
  );
}

export default App;
