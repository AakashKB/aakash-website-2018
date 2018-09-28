import { Component } from 'react';
import Colors from '../constants/Colors';
import ExpCard from './ExpCard';

export default class Intro extends Component{
    render(){
        const languages = ['Language','Language','Language','Language','Language','Tool','Tool'];
        const exp = [
            'I did this with that using this and that',
            'I did this with that using this and that',
            'I did this with that using this and that'
        ];
        return(
            <section>
                <div className='background'></div>
                <img src="https://s3.amazonaws.com/practice-aakash/avatar_wink.svg" width={200} height={220}/>
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
                <div className="exp-card-container">
                    <ExpCard 
                        gridColumn='2/3'
                        company='Company'
                        role='Role'
                        startMonth='January'
                        startYear='2018'
                        endMonth='December'
                        endYear='2018'
                        languages={languages}
                        exp={exp}
                    />
                    <ExpCard 
                        gridColumn='3/4'
                        company='Company'
                        role='Role'
                        startMonth='January'
                        startYear='2018'
                        endMonth='December'
                        endYear='2018'
                        languages={['Language','Language','Language','Language','Language','Tool','Tool']}
                        exp={[
                            'I did this with that using this and that',
                            'I did this with that using this and that',
                            'I did this with that using this and that'
                        ]}
                    />
                    <ExpCard 
                        gridColumn='4/5'
                        company='Company'
                        role='Role'
                        startMonth='January'
                        startYear='2018'
                        endMonth='December'
                        endYear='2018'
                        languages={['Language','Language','Language','Language','Language','Tool','Tool']}
                        exp={[
                            'I did this with that using this and that',
                            'I did this with that using this and that',
                            'I did this with that using this and that'
                        ]}
                    />
                </div>
                <style jsx>{`
                    section{
                        display: grid;
                        grid-template-rows: 120px 100px 1fr 150px 150px auto;
                        grid-column: 1fr;
                        margin-top: 25px;
                        color: white;
                        text-align: center;
                    }

                    .background{
                        background-color: ${Colors.primary};
                        grid-row: 2/6;
                        grid-column: 1/2;
                    }

                    img{
                        grid-row: 1/3;
                        grid-column: 1/2;
                        justify-self: center;
                    }

                    h1{
                        font-size: 48px;
                        font-weight: 900;
                        margin: 50px 200px 10px;
                        grid-row: 4/5;
                        grid-column: 1/2;
                    }

                    .content{
                        grid-row: 3/4;
                        grid-column: 1/2;
                        margin: 0px;
                    }

                    .content h1{
                        font-size: 48px;
                        font-weight: 900;
                        margin: 25px 200px 10px;
                    }

                    .content p{
                        font-size: 36px;
                        font-weight: 100;
                        margin: 0px 150px;
                    }
                    .exp-card-container{
                        grid-row: 5/7;
                        grid-column: 1/2;
                        display: grid;
                        grid-template-columns: 5% 1fr 1fr 1fr 5%;
                    }
                    
                `}</style>
            </section>
        );
    }
}