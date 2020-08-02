import React from 'react';
import styled from 'styled-components';

const BackgroundComponent = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100vh;
    background-color:${props => props.backgroundColor};
`

const Background = ({children,backgroundColor}) => {
    return (
        <BackgroundComponent 
            backgroundColor={backgroundColor}>
            {children}
        </BackgroundComponent>
    );
}

export default Background;