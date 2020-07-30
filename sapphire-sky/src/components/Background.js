import React from 'react';
import styled from 'styled-components';

const BackgroundComponent = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100vh;
    background-image:linear-gradient(
                     to right bottom, 
                     ${props => props.lightColor}, 
                     ${props => props.darkColor});
`

const Background = ({children,
                     firstGradientColor,
                     secondGradientColor}) => {
    return (
        <BackgroundComponent 
            lightColor={firstGradientColor} 
            darkColor={secondGradientColor}>
            {children}
        </BackgroundComponent>
    );
}

export default Background;