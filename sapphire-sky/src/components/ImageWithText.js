import React from 'react';
import styled from 'styled-components';

//Componetns:
import DivImage from './DivImage';
import Paragraph from './Paragraph';

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    margin-top:10px;
`


const ImageWithText = ({children, leftImg}) => {
    return (
        <Wrapper>
            {console.log(leftImg)}
            <DivImage img={leftImg}/>
            <Paragraph>{children}</Paragraph>
        </Wrapper>
    )
}

export default ImageWithText;