import React from 'react';
import styled from 'styled-components';

import WeatherInfo from './WeatherInfo';
import Forecast from './Forecast';
import Button from './Button';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    width:50%;
    height:100%;
    margin-left:52%;
    padding:20px;
`

const AdditionalInfo = ({onClickFn}) => {
    return(
        <Wrapper>
            <div>
                <WeatherInfo heading="precipitation" info="0%"/>
                <WeatherInfo heading="humidity" info="32%"/>
                <WeatherInfo heading="wind" info="5 km/h"/>
            </div>
            <Forecast/>
            <Button onClickFn={onClickFn}>Change location</Button>
        </Wrapper>
          );
}

export default AdditionalInfo;