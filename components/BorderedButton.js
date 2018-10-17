import { Component } from 'react';

export default class BorderedButton extends Component{
    render(){
        return(
            <a href={this.props.href} target={this.props.target || '_blank'}>
                <button className='bordered-button' onMouseOver={this.props.onMouseOver} onMouseOut={this.props.onMouseOut} type={this.props.buttonType || 'button'}>
                    {this.props.children}
                    <style jsx>{`
                        .bordered-button{
                            width: ${this.props.width || '50px'};
                            height: ${this.props.height || '50px'};
                            border: ${this.props.borderWidth || '1px'} ${this.props.borderStyle || 'solid'} ${this.props.color || 'black'};
                            border-radius: ${this.props.borderRadius || '0px'};
                            margin-top: ${this.props.marginTop || '0px'};
                            margin-bottom: : ${this.props.marginBottom || '0px'};
                            margin-left: ${this.props.marginLeft || '0px'};
                            margin-right: ${this.props.marginRight || '0px'};
                            padding-top: ${this.props.paddingTop || '0px'};
                            padding-bottom: : ${this.props.paddingBottom || '0px'};
                            padding-left: ${this.props.paddingLeft || '0px'};
                            padding-right: ${this.props.paddingRight || '0px'};
                            background-color: ${this.props.backgroundColor || 'transparent'};
                            text-align: center;
                            line-height: 50%;
                            transition: background-color 0.5s;
                        }
                        .bordered-button:hover{
                            background-color: ${this.props.color || 'black'};
                        }
                    `}</style>
                </button>
            </a>
        );
    }
}