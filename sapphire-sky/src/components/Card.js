import React from 'react';
import styled from 'styled-components';

// Components :
import DivImage from './DivImage';
import ImageWithText from './ImageWithText';
import Paragraph from './Paragraph';
import StyledHeading from './Heading';

// Assets :
import LocationPin from '../assets/svgs/white/pin.svg';
import Sun from '../assets/svgs/white/sun.svg';

const Wrapper = styled.div`
    position:absolute;
    top:-1vh;
    width:50%;
    height:72vh;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:20px;
    border-radius:2rem;
    transition:transform 0.25s ease-in;
    background-image: 
        linear-gradient(to right bottom, 
                        rgba(134, 234, 239, 0.52),
                        rgba(84, 94, 230, 0.73)),
        url(${props => props.picture});

    :hover{
        transform:scale(1.02);
    }
`

const Card = (  
                {picture,
                 today,
                 date, 
                 temperature, 
                 additionalDescripiton}
             ) => {
    return (
        <Wrapper picture={picture}>
            <div>
                <StyledHeading>{today}</StyledHeading>
                <Paragraph>{date}</Paragraph>
                <ImageWithText leftImg={LocationPin}>Olso, Nr</ImageWithText>
            </div>
            <div>
                <DivImage width={110} height={110} bgSize={105} img={Sun} />
                <StyledHeading weight={800} size={72}>{temperature}</StyledHeading>
                <Paragraph weight={700} size={20}>{additionalDescripiton}</Paragraph>
            </div>
        </Wrapper>
           );
}

export default Card;