import { Component } from 'react';
import Colors from '../constants/Colors';
import ExpCard from './ExpCard';

export default class Intro extends Component{

    _renderExpCards = () => {
        const languages = ['Language','Language','Language','Language','Language','Tool','Tool'];
        const exp = [
            'I did this with that using this and that',
            'I did this with that using this and that',
            'I did this with that using this and that'
        ];

        return(
            <div className="exp-card-container">
                <ExpCard
                    gridColumn='2/3'
                    company='Company'
                    role='Role'
                    startMonth='Jan'
                    startYear='2018'
                    endMonth='Dec'
                    endYear='2018'
                    languages={languages}
                    exp={exp}
                />
                <ExpCard 
                    gridColumn='3/4'
                    company='Company'
                    role='Role'
                    startMonth='Jan'
                    startYear='2018'
                    endMonth='Dec'
                    endYear='2018'
                    languages={languages}
                    exp={exp}
                />
                <ExpCard 
                    gridColumn='4/5'
                    company='Company'
                    role='Role'
                    startMonth='Jan'
                    startYear='2018'
                    endMonth='Dec'
                    endYear='2018'
                    languages={languages}
                    exp={exp}
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                        occaecat cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                        occaecat cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum.
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