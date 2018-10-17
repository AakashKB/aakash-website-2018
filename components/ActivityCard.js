import { Component } from 'react';
import Colors from '../constants/Colors';

export default class ActivityCard extends Component {
    state = {
        hover: false
    }
    render() {
        return (
            <div 
                className='card-activity' 
                onMouseEnter={() => this.setState({ hover: true })} 
                onMouseLeave={() => this.setState({ hover: false })}
            >
                    <p>{this.props.content}</p>
                    {this.props.backgroundImage ? <h1>{this.props.title}</h1> : 
                    <img className='logo-activity' src={this.props.logoUrl} alt='Logo' />}
                    <div className="bg"></div>
                
                <style jsx>{`
                    .card-activity{
                        display: grid;
                        grid-template-columns: 1fr;
                        grid-template-rows: 1fr;
                        align-content: center;
                        text-align: center;
                        justify-content: center;
                        border-radius: 30px;
                        box-shadow: 0px 2px 4px rgb(0,0,0,0.1);
                        height: 25vw;
                        background: ${this.props.backgroundColor || 'white'};
                        overflow: hidden;
                        position: relative;
                    }

                    h1{
                        grid-row: 1/2;
                        grid-column: 1/2;  
                        font-size: 72px;
                        color: white;
                        z-index: 1;
                        align-self: center;
                        transition: opacity 0.25s, font-size 0.5s;
                        margin: 0px;
                        padding: 0px;
                        white-space: nowrap;
                        overflow: hidden;
                    }

                    .bg{
                        grid-row: 1/2;
                        grid-column: 1/2;
                        background-image: url(${this.props.backgroundImage});
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: 115%;
                        background-color: ${this.props.backgroundColor};
                        opacity: ${this.props.startOpacity || 1};
                        z-index: 0;
                        transition: opacity 0.5s, background-size 0.5s;
                    }

                    .card-activity:hover{
                        background: linear-gradient(135deg, ${Colors.accentLight} -50%, ${Colors.accentDark} 125%);
                    }

                    .card-activity:hover > .bg{
                        background-size: 130%;
                        opacity: 0;
                    }
                    
                    .card-activity:hover > h1{
                        background-size: 130%;
                        opacity: 0;
                        font-size: 96px;
                    }

                    .card-activity:hover > p{
                        opacity: 100
                    }

                    .logo-activity{
                        grid-row: 1/2;
                        grid-column: 1/2; 
                        width: 15vw;
                        min-width: 150px;
                        padding: 25px 10%;
                        margin: 0px auto;
                        align-self: center; 
                        z-index: 1;
                        opacity: 1;
                        transition: opacity 0.5s, width 0.5s;
                        background-color: ${this.props.backgroundColor}
                    }

                    .card-activity:hover > .logo-activity{
                        opacity: 0;
                        width: 20vw;
                    }

                    p{
                        grid-row: 1/2;
                        grid-column: 1/2;
                        font-size: 36px;
                        font-weight: 300;
                        margin: 5% 10%;
                        z-index: 1;
                        opacity: 0;
                        transition: opacity 0.5s;
                        align-self: center;
                    }

                    @media only screen and (max-width: 1824px){
                        p{
                            font-size: 24px;
                        }
                    }
                    @media only screen and (max-width: 1024px){
                        p{
                            font-size: 18px;
                        }
                    }

                    @media only screen and (max-width: 768px){
                        .card-activity{
                            height: 40vw;
                        }

                        .logo-activity{
                            width: 25vw;
                            min-width: 100px;
                        }

                        h1{
                            font-size: 60px;
                        }
                        .card-activity:hover > h1{
                            background-size: 130%;
                            opacity: 0;
                            font-size: 72px;
                        }
                    }

                    @media only screen and (max-width: 480px){
                        .card-activity{
                            border-radius: 15px;
                        }

                        p{
                            font-size: 12px;
                        }

                        h1{
                            font-size: 36px;
                        }

                        .card-activity:hover > h1{
                            font-size: 48px;
                        }

                        .card-activity:hover > .logo-activity{
                            width: 40vw;
                        }
                    }
                `}</style>
            </div>
        );
    }
}
