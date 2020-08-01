import React from 'react';
import styled, {keyframes} from 'styled-components';

const SunRay = styled.div`
    position:absolute;
    height:30px;
    width:5px;
    opacity:1;
    background-color:#e6e600;
    border-radius:5px;
    transition:opacity 0.25s ease-in;
    top:${props => props.top +'%'};
    left:${props => props.left + '%'};
    transform:translateX(${props => props.translationX +'px'});
    transform:translateY(${props => props.translationY +'px'});
    transform:rotate(${props => props.rotation+'deg'});
`

const Card = styled.div`
    position:relative;
    width:15rem;
    height:20rem;
    background-image:linear-gradient(to right bottom, #adbce6,#869cda);
    box-shadow: 0px 0px 10px 5px #223771;
    z-index:20;
    transition:opacity 0.2s;

    :hover ${SunRay}{
        opacity:1;
    }
`

const Sun = styled.div`
    position:absolute;
    height:80px;
    width:80px;
    background-image:linear-gradient(to right bottom, #e6e600,#e6ad00);
    top:50%;
    left:50%;
    transform:translateY(-40px) translateX(-40px);
    border-radius:50%;
`;



const SunnyDayCard = props => {
    return(
        <Card>
            <Sun/>
            {/* <SunRay top={25} left={50} translationX={-2.5}/>
            <SunRay top={65} left={50} translationX={-2.5}/>
            <SunRay top={45} left={22} rotation={90}  translationX={5}/>
            <SunRay top={45} left={75} rotation={90}  translationX={5}/>
            <SunRay top={30} left={70} rotation={45}/>
            <SunRay top={70} left={30} rotation={45}/>
            <SunRay top={30} left={70} rotation={-45}/>
            <SunRay top={65} left={65} rotation={-45}/> */}
        </Card>
    )
}

export default SunnyDayCard;