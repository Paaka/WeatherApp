import React from 'react';
import styled from 'styled-components';
import Colors from '../constants/Colors';
import Card from './Card';
import BackgroundImg from '../assets/beach.jpg';
import AdditionalInfo from './AdditionalInfo';

const MainContainer = styled.div`
    position:relative;
    width:50%;
    height:70vh;
    border-radius:2rem;
    background-color:${Colors.widgetGrey};
`;

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

    const todaysDateArray = new Date().toDateString().split(' ');

    const todaysDate = `${todaysDateArray[2]} ${todaysDateArray[1]} ${todaysDateArray[3]}`



    

    return(
        <MainContainer>
            <Card 
                picture={BackgroundImg}
                today={Today}
                date={todaysDate}
                temperature="29°C"
                additionalDescripiton="Sunny"/>
            <AdditionalInfo />
        </MainContainer>
    )
}

export default WeatherWidget;