import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding:5px 10px;
    font-family:'Montserrat','sans-serif';
`

const Button = ({onClickFn, children}) => {
    const onClickHandler = (e) => {
        onClickFn();
    }

    return <StyledButton onClick={onClickHandler}>{children}</StyledButton>
}

export default Button;