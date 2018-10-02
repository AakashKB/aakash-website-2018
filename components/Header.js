import {Component} from 'react';
import {FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa';
import Colors from '../constants/Colors';
import IconLinks from './IconLinks';

export default class Header extends Component{
    render(){
        return(
            <nav>
                <img src="https://s3.amazonaws.com/practice-aakash/avatar_wink.svg"/>
                <IconLinks 
                    icons= {[
                        {icon:FaGithub,href:'#'},
                        {icon:FaLinkedin,href:'#'},
                        {icon:FaEnvelope,href:'#'},
                    ]}
                    color={Colors.primary}
                />
                <div className='title'>
                    <h1>Front End Developer & Entrepreneur</h1>
                    <h2>University of Connecticut, class of 2020</h2>
                    <h3>Computer Science and Engineering</h3>
                </div>
                <style jsx>{`
                    nav{
                        display: grid;
                        grid-template-rows: 100px 1fr;
                        grid-template-columns: 1fr 1fr;
                    }
                    
                    img{
                        margin-left: 25px;
                        margin-top: 25px;
                        height: 50px;
                    }

                    .title{
                        grid-row: 2/3;
                        grid-column: 1/3;
                        justify-self: center;
                        text-align: center;
                        align-items: center;
                    }

                    .title h1{
                        font-size: 64px;
                        color: ${Colors.grayDark};
                        font-weight: 700;
                        margin: 0px 25px;
                        
                    }

                    .title h2{
                        font-size: 36px;
                        color: ${Colors.grayLight};
                        margin: 0px 25px;
                        font-weight: 700;
                    }

                    .title h3{
                        font-size: 32px;
                        color: ${Colors.grayLight};
                        margin: 0px 25px;
                        font-weight: 300;
                    }

                    nav :global(.links){
                        grid-row: 1/2;
                        grid-column: 2/3;
                    }

                    @media only screen and (max-width: 768px) {
                        .title h1{
                            font-size: 36px;
                        }

                        .title h2, .title h3{
                            font-size: 18px;
                        }
                        img{
                            margin-left: 15px;
                            height: 40px;
                        }
                    }
                `}</style>
            </nav>
        );
    }
}