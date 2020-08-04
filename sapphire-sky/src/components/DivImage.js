import styled from 'styled-components';

const DivImage = styled.div`
    width: ${({width}) => width ? `${width}px`: `25px`};
    height: ${({height}) => height ? `${height}px`: `25px`};
    background-image: url(${({img}) => img});
    background-size:${({bgSize}) => bgSize ? `${bgSize}px`: `25px`};
    background-repeat:no-repeat;
    background-position-x:center;
    background-position-y:center;
`

export default DivImage;