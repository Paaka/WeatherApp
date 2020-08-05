import React from 'react';
import styled from 'styled-components';
import Colors from '../constants/Colors';

const StyledButton = styled.button`
    width:90%;
    padding:15px 10px;
    font-family:'Montserrat','sans-serif';
    font-size:18px;
    border-radius:15px;
    border:none;
    transition: 0.25s ease-in transform;
    outline:none;
    color:white;
    background-image: linear-gradient(to right bottom, ${Colors.greenLeaf}, ${Colors.sapphire});

    :hover{
        transform: scale(1.02);
    }
`

const Button = ({onClickFn, children}) => {
    const onClickHandler = (e) => {
        onClickFn();
    }

    return <StyledButton onClick={onClickHandler}>{children}</StyledButton>
}

export default Button;