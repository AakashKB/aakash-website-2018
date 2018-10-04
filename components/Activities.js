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
                        logoUrl='https://s3.amazonaws.com/practice-aakash/avatar_wink.svg'
                        backgroundImage='https://s3.amazonaws.com/www.kashkb.com/assets/Homecontrol.jpg'
                        title='Title'
                        content=' Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    />
                    <ActivityCard
                        logoUrl='https://s3.amazonaws.com/practice-aakash/avatar_wink.svg'
                        title='Title'
                        content=' Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    />
                    <ActivityCard
                        logoUrl='https://s3.amazonaws.com/practice-aakash/avatar_wink.svg'
                        title='Title'
                        content=' Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    />
                    <ActivityCard
                        logoUrl='https://s3.amazonaws.com/practice-aakash/avatar_wink.svg'
                        title='Title'
                        content=' Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.'
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