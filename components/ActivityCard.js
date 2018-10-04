import { Component } from 'react';
import Colors from '../constants/Colors';

export default class ActivityCard extends Component {
    state = {
        hover: false
    }
    render() {
        return (
            <div className='card-activity' onMouseEnter={() => this.setState({ hover: true })} onMouseLeave={() => this.setState({ hover: false })}>
                {this.state.hover ?
                    <div>
                        <p>{this.props.content}</p>
                    </div> :
                    <img className='logo-activity' src={this.props.logoUrl} alt='Logo' />}
                <style jsx>{`
                    .card-activity{
                        display: grid;
                        align-content: center;
                        border-radius: 30px;
                        box-shadow: 0px 2px 4px rgb(0,0,0,0.1);
                        height: 25vw;
                        background: white;
                        background-image: ${this.props.backgroundImage || 'none'}
                    }

                    .card-activity:hover{
                        background: linear-gradient(135deg, ${Colors.accentLight} -50%, ${Colors.accentDark} 125%)
                    }

                    .logo-activity{
                        width: 15vw;
                        min-width: 150px;
                        padding: 25px 10%;
                        margin: 0px auto;
                    }

                    p{
                        font-size: 36px;
                        font-weight: 300;
                        margin: 5% 10%;
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
                    }

                    @media only screen and (max-width: 480px){
                        .card-activity{
                            border-radius: 15px;
                        }
                        p{
                            font-size: 12px;
                        }
                    }
                `}</style>
            </div>
        );
    }
}
