import React from 'react';
import styled from 'styled-components';

import WeatherInfo from './WeatherInfo';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:50%;
    height:100%;
    margin-left:52%;
    padding:20px;
`

const AdditionalInfo = () => {
    return(
        <Wrapper>
            <div>
                <WeatherInfo heading="precipitation" info="0%"/>
                <WeatherInfo heading="humidity" info="32%"/>
                <WeatherInfo heading="wind" info="5 km/h"/>
            </div>
        </Wrapper>
          );
}

export default AdditionalInfo;