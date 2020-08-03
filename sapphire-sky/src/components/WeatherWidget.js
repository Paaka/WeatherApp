import React from 'react';
import styled from 'styled-components';
import Colors from '../constants/Colors';
import Card from './Card';
import BackgroundImg from '../assets/beach.jpg';

const MainContainer = styled.div`
    position:relative;
    width:50%;
    height:70vh;
    border-radius:2rem;
    background-color:${Colors.widgetGrey};
`

const GetNameOfDay = (day) => {
    switch(day){
        case 0: return 'Sunday';
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
        default:{
            return 'Out of reach'
        }
    }
}

const WeatherWidget = () => {
    const Today =  GetNameOfDay(new Date().getDay());

    const todaysDate = new Date().toDateString().slice(4,10);


    

    return(
        <MainContainer>
            <Card 
                picture={BackgroundImg}
                today={Today}/>
        </MainContainer>
    )
}

export default WeatherWidget;