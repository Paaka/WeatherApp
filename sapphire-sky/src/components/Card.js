import React from 'react';
import styled from 'styled-components';

// Components :
import DivImage from './DivImage';
import ImageWithText from './ImageWithText';
import Paragraph from './Paragraph';

// Assets :
import LocationPin from '../assets/svgs/white/pin.svg';
import Sun from '../assets/svgs/white/sun.svg';

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
    padding:20px;

    :hover{
        transform:scale(1.02);
    }
`

const StyledH2 = styled.h2`
    color:white;
    font-size:26px;
    font-family:'Montserrat','sans-serif';
    font-weight:600;
` 



const Card = ({picture, today, date}) => {
    return (
        <Wrapper picture={picture}>
            <StyledH2>{today}</StyledH2>
            <Paragraph>{date}</Paragraph>
            <ImageWithText leftImg={LocationPin}>Olso, Nr</ImageWithText>
            <DivImage width={75} height={75} bgSize={70} img={Sun} />
            
        </Wrapper>
    );
}

export default Card;