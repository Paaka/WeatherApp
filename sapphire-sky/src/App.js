import React from 'react';

import './index.css';
import Background from './components/Background';
import Colors from './constants/Colors';
import SunnyDayCard from './constants/Cards/SunnyDay';



function App() {
  return (
    <Background firstGradientColor={Colors.greenLeaf} secondGradientColor={Colors.sapphire}>
      <SunnyDayCard/>
    </Background>
  );
}

export default App;
