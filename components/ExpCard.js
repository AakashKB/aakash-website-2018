import { Component } from 'react';
import Colors from '../constants/Colors';

export default class ExpCard extends Component {

    _renderListItem = (item, key) => (
        <li key={key}>
            <span>{item}</span>
            <style jsx>{`
                li{
                    margin-top: 5px;
                }
                span{
                    color: ${Colors.grayDark}
                }
            `}</style>
        </li>
    );

    _renderListFromArray = (arr, bullets) => (
        <ul>
            {arr.map((item, key) => this._renderListItem(item, key))}
            <style jsx>{`
                ul{
                    font-size: 24px;
                    font-weight: 300;
                    padding: 0px;
                    margin: 5px 5% 0px;
                    text-align: ${bullets ? 'start' : 'center'};
                    list-style: ${bullets || 'none'};
                    color: ${Colors.primary}
                }

                @media only screen and (max-width: 768px) {
                    ul{
                        font-size: 18px;
                        margin-top: 5px;
                    }
                }
            `}</style>
        </ul>
    );

    render() {
        let langKey = 0;
        let expKey = 0;
        return (
            <div className='exp-card'>
                <h1>{this.props.company}</h1>
                <h2>{this.props.role}</h2>
                <h3>{this.props.startMonth} {this.props.startYear} - {this.props.endMonth} {this.props.endYear}</h3>
                <h1 className='exp-title'>Languages/Tools I used:</h1>
                {this._renderListFromArray(this.props.languages)}
                <h1 className='exp-title'>What I did:</h1>
                {this._renderListFromArray(this.props.exp, true)}
                <style jsx>{`
                    .exp-card{
                        color: ${Colors.grayDark};
                        text-align: center;
                        background-color: white;
                        border-radius: 30px;
                        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
                        border: 0.5px solid ${Colors.primaryTransparent};
                        box-sizing: border-box;
                        grid-row: ${this.props.gridRow || 'auto'};
                        grid-column: ${this.props.gridColumn || 'auto'};
                        margin: 0px 2.5%;
                        padding: 25px 5% 20%;
                    }

                    h1{
                        font-size: 36px;
                        font-weight: 400;
                        margin: 0px;
                        margin-top: 25px;
                    }

                    h2,h3{
                        font-size: 24px;
                        font-weight: 700;
                        color: ${Colors.grayLight};
                        margin: 0px;
                        margin-top: 5px;
                    }

                    h3{
                        font-weight: 400;
                    }

                    .exp-title{
                        font-size: 24px;
                        font-weight: 700;
                        color: ${Colors.primary};
                        margin-top: 50px;
                    }

                    @media only screen and (max-width: 768px) {
                        .exp-card{
                            grid-column: 2/3;
                            margin-bottom: 50px;
                        }

                        h1{
                            font-size: 24px;
                            margin-top: 10px;
                        }

                        h2,h3{
                            font-size: 18px;
                            margin-top: 5px;
                        }

                        .exp-title{
                            font-size: 18px;
                            margin-top: 25px;
                        }
                    }
                `}</style>
            </div>
        );
    }
}