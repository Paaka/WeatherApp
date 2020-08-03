import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position:absolute;
    width:50%;
    height:72vh;
    background-color:red;
    top:-1vh;
    border-radius:2rem;
    transition:transform 0.25s ease-in;
    background-image: 
        linear-gradient(to right bottom, 
                        rgba(134, 234, 239, 0.52),
                        rgba(84, 94, 230, 0.73)),
        url(${props => props.picture});
    padding:10px;

    :hover{
        transform:scale(1.02);
    }
`

const StyledH2 = styled.h2`
    color:white;
    font-size:32px;
    font-family:'Montserrat','sans-serif';
    font-weight:800;
` 

const Card = ({picture, today}) => {
    return (
        <Wrapper picture={picture}>
            <StyledH2>{today}</StyledH2>
        </Wrapper>
    );
}

export default Card;