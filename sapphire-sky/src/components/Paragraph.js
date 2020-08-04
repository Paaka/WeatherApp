const { default: styled } = require("styled-components");

const Paragraph = styled.p`
    font-family:'Montserrat', 'sans-serif';
    font-weight:${({weight})=> weight ? weight : 300};
    font-size:${(size) => size ? `${size}px` : '16px'};
    text-transform:${({uppercase})=> uppercase ? `uppercase` : `none`};
    color:white;
`

export default Paragraph;