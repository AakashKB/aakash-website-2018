import {Component, Fragment} from 'react';
import {FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa';
import BorderedButton from './BorderedButton';
import IconBorderedButton from './IconBorderedButton';

export default class Header extends Component{
    state={
        color:'black'
    }

    _renderIconBorderedButton = ({icon,href}) => (
        <IconBorderedButton 
            borderWidth='2px' 
            borderRadius='100px' 
            iconSize={30} 
            icon={icon}
            color='#4BE15A'
            iconColor='#4BE15A'
            href={href}
            marginLeft='10px'
        />
    );
    _renderLinks = icons => (
        <div className='links'>
            {icons.map(icon => this._renderIconBorderedButton(icon))}
            <style jsx>{`
                .links{
                    display: grid;
                    grid-auto-flow: column;
                    grid-row: 1/2;
                    grid-column: 2/3;
                    justify-self: end;
                    margin-top: 25px;
                    margin-right: 25px;
                }
            `}</style>
        </div>
    );

    render(){
        return(
            <nav>
                <img src="https://s3.amazonaws.com/practice-aakash/avatar_wink.svg" width={50} height={55}/>
                {this._renderLinks([
                    {icon:FaGithub,href:'#'},
                    {icon:FaLinkedin,href:'#'},
                    {icon:FaEnvelope,href:'#'},
                ])}
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
                        color: #333;
                        font-weight: bold;
                        margin: 0px 25px;
                        
                    }

                    .title h2{
                        font-size: 36px;
                        color: #888;
                        margin: 0px 25px;
                        font-weight: 900;
                    }

                    .title h3{
                        font-size: 32px;
                        color: #888;
                        margin: 0px 25px;
                        font-weight: 100;
                    }

                    @media only screen and (max-width: 768px) {
                        .title h1{
                            font-size: 36px;
                        }

                        .title h2, .title h3{
                            font-size: 18px;
                        }
                    }
                `}</style>
            </nav>
        );
    }
}