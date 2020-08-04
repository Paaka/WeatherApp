import styled from 'styled-components';

const StyledHeading = styled.h2`
    font-family:'Montserrat', 'sans-serif';
    font-size:${({size})=> size ? `${size}px`:`24px`};
    font-weight:${({weight})=> weight ? weight : `700`};
    color:white;
`

export default StyledHeading;