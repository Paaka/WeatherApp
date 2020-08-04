import React from 'react';
import styled from 'styled-components';

//components 
import Paragraph from './Paragraph';

const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    width:90%;
    margin-bottom:5px;
`;

const WeatherInfo = ({heading, info}) => {
    return(
        <Wrapper>
            <Paragraph weight={700} uppercase>{heading}</Paragraph>
            <Paragraph>{info}</Paragraph>
        </Wrapper>
          );
};

export default WeatherInfo;