import { Component } from 'react';
import Colors from '../constants/Colors';
import ExpCard from './ExpCard';

export default class Intro extends Component{

    _renderExpCards = () => {
        return(
            <div className="exp-card-container">
                <ExpCard
                    gridColumn='2/3'
                    company='Cigna'
                    role='Software Architect (Intern)'
                    startMonth='Jan'
                    startYear='2018'
                    endMonth='Present'
                    endYear=''
                    languages={['JavaScript','React Native','Java','Python','TensorFlow','Andoid Studio', 'Node.js', 'Express','MongoDB']}
                    exp={[
                        'Utilize MongoDB, Node.js, and Express to develop a comprehensive backend for a leaderboard system',
                        'Develop a cross-platform mobile application, connected to a provider information database on a distributed ledger, using JavaScript and React Native',
                        'Develop a voice navigation feature for an android application using Java, Python, and Tensor Flow'
                    ]}
                />
                <ExpCard 
                    gridColumn='3/4'
                    company='Xamax Industries'
                    role='Software Engineer (Intern)'
                    startMonth='Dec'
                    startYear='2016'
                    endMonth='Aug'
                    endYear='2017'
                    languages={['Python','VBA','MS Access','MS Excel','\u00A0','\u00A0', '\u00A0','\u00A0','\u00A0']}
                    exp={[
                        'Developed a program that automates material testing tasks to increase company efficiency using Python and VBA',
                        'Worked closely with colleagues to expand and innovate data management systems via MS Access',
                        'Developed a proprietary system that eliminated need for third party software, therefore, decreasing annual costs'
                    ]}
                />
                <ExpCard 
                    gridColumn='4/5'
                    company='University of Connecticut'
                    role='Software Developer'
                    startMonth='Jan'
                    startYear='2017'
                    endMonth='May'
                    endYear='2017'
                    languages={['Python','\u00A0','\u00A0','\u00A0','\u00A0','\u00A0', '\u00A0', '\u00A0','\u00A0']}
                    exp={[
                        'Developed a GUI for a traffic data collection tool using Python',
                    ]}
                />
                <style jsx>{`
                    .exp-card-container{
                        grid-row: 5/7;
                        grid-column: 1/2;
                        display: grid;
                        grid-template-columns: 5% 1fr 1fr 1fr 5%;
                    }
                    @media only screen and (max-width: 768px) {
                        .exp-card-container{
                            grid-template-columns: 5% 1fr 5%;
                            grid-template-rows: 1fr 1fr 1fr;
                        }
                    }
                `}</style>
            </div>
    );}

    render(){
        return(
            <section className='section-intro'>
                <div className='background'></div>
                <img src='/static/assets/aakash-avatar-wink.svg'/>
                <div className="content">
                    <h1>Hey friend. My name is Aakash!</h1>
                    <p>
                        I've been enjoying coding for the past six years. I started with simple websites and
                        a couple games. More recently, I've been doing a lot of web and mobile app
                        development. I'm primarily a front-end developer and, I am excited to say, have
                        started delving into the back-end world. Aside from being a full time student with an
                        internship at Cigna, I also like to freelance on the side. Entrepreneurship is another
                        passion of mine! I am currently working on an app based startup for efficiently connecting
                        your digital profiles. I'll be sure to add a link to the app as soon as it's live :).
                        Scroll down to learn more about me and see what I've been up to! 
                    </p>
                </div>
                <h1>Experience</h1>
                {this._renderExpCards()}
                <style jsx>{`
                    .section-intro{
                        display: grid;
                        grid-template-rows: 120px 100px 1fr 150px 150px auto;
                        grid-template-columns: 1fr;
                        margin-top: 25px;
                        color: white;
                        text-align: center;
                    }

                    .background{
                        grid-row: 2/6;
                        grid-column: 1/2;
                        background: linear-gradient(120deg, ${Colors.primaryLight} 0%, ${Colors.primaryDark} 100%);
                    }

                    img{
                        grid-row: 1/3;
                        grid-column: 1/2;
                        width: 200px;
                        height: 220px;
                        justify-self: center;
                    }

                    h1{
                        grid-row: 4/5;  
                        grid-column: 1/2;
                        font-size: 48px;
                        font-weight: 700;
                        margin: 50px 10% 10px;
                    }

                    .content{
                        grid-row: 3/4;
                        grid-column: 1/2;
                        margin: 0px;
                    }

                    .content h1{
                        margin-top: 25px;
                    }

                    .content p{
                        font-size: 36px;
                        font-weight: 300;
                        margin: 0px 10%;
                    }

                    @media only screen and (max-width: 768px) {
                        h1{
                            font-size: 36px;
                        }

                        .content p{
                            font-size: 24px;
                        }
                    }
                `}</style>
            </section>
        );
    }
}
