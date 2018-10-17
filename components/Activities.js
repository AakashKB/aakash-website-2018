import { Component } from 'react';
import Colors from '../constants/Colors';
import ActivityCard from './ActivityCard';

export default class Activities extends Component{

    render(){
        return(
            <section className='section-activities'>
                <h1>Other Activities</h1>
                <div className='container-activities'>
                    <ActivityCard
                        backgroundImage='/static/assets/Homecontrol.jpg'
                        backgroundColor= '#2c3e50'
                        startOpacity = {0.4}
                        title='Home Control'
                        content="A summer project where I configured the lights in my room to work with Alexa.
                                I didn't want to use an 'out of the box' solution so I bought my own components,
                                tore down the walls in my room, reconfigured the wiring, and cleaned everything up.
                                A great project for learning about home improvement and IOT"
                                
                    />
                    <ActivityCard
                        logoUrl='/static/assets/logo-frc.svg'
                        content='A few parts, 6 weeks, and an awesome team. First Robotics is a competition that
                                truly shaped my life and inspired to be an engineer. I started as an assistant
                                and worked up to becoming the lead of the programming team. It was a wonderful oppurtunity
                                to hone my skills, mentor my peers, and work with a team!'
                    />
                    <ActivityCard
                        backgroundImage='/static/assets/hh.jpg'
                        backgroundColor= '#2B2728'
                        content='The first of my many hackathons. I learned Kotlin, and Android studio in 24 hours to
                                build a simple app that shows you were a book in a library is located when you scan it.
                                It was truly a great experience, we even won a sub category!'
                    />
                    <ActivityCard
                        logoUrl='/static/assets/logo-dropboard.svg'
                        backgroundColor='#77B3D4'
                        content='A startup inspired from a hackathon project. Our team built a collaborative, social
                                drawing app and released it to about 25 alpha testers. This was my first real taste of
                                entrepreneurship and it has inspired me to further continue on this path.'
                    />
                </div>
                
                <style jsx>{`
                    .section-activities{
                        display: grid;
                        grid-template-columns: 5% 1fr 5%;
                        margin-top: 25px;
                        color: white;
                        text-align: center;
                        background: linear-gradient(120deg, ${Colors.primaryLight} 0%, ${Colors.primaryDark} 100%);
                        padding-bottom: 50px;
                    }

                    .container-activities{
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-column: 2/3;
                        grid-gap: 50px 10%;
                        margin-top: 25px;
                    }

                    h1{
                        grid-column: 2/3;
                        font-size: 48px;
                        font-weight: 700;
                        margin: 0px;
                        margin-top: 50px;
                    }

                    @media only screen and (max-width: 768px) {
                        h1{
                            font-size: 36px;
                        }

                        .section-activities{
                            grid-template-columns: 10% 1fr 10%;
                        }

                        .container-activities{
                            grid-template-columns: 1fr;
                            margin-top: 25px;
                            grid-gap: 25px 0px;
                        }
                    }
                `}</style>
            </section>
        );
    }
}