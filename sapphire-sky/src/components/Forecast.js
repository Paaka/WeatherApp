import React from 'react';
import styled from 'styled-components';
import Colors from '../constants/Colors';

import DivImage from './DivImage';

import Sun from '../assets/svgs/dark/sun.svg'


const Wrapper = styled.div`
    display:flex;
    width:90%;
    height:15vh;
    background-color:${Colors.forecastGrey};
    border-radius:10px;
`

const ForecastItem = styled.div`
    width:25%;
    height:100%;
    background-color:${({color})=> color};
    border-radius:10px;
    transition:0.25s ease-in all;

    :hover{
        background-color:white;
        transform:scale(1.1);
    }
`

const Forecast = () => {
    return(
        <Wrapper>
            <ForecastItem color="white">
                <DivImage img={Sun}/>
            </ForecastItem>
            <ForecastItem></ForecastItem>
            <ForecastItem></ForecastItem>
            <ForecastItem></ForecastItem>
        </Wrapper>
    );
}

export default Forecast;