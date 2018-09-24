import { Component } from 'react';

export default class BorderedButton extends Component{
    render(){
        return(
            <a href={this.props.href} target='_blank'>
                <div onMouseOver={this.props.onMouseOver} onMouseOut={this.props.onMouseOut}>
                    {this.props.children}
                    <style jsx>{`
                        div{
                            width: ${this.props.width || '50px'};
                            height: ${this.props.height || '50px'};
                            border: ${this.props.borderWidth || '1px'} ${this.props.borderStyle || 'solid'} ${this.props.color || 'black'};
                            border-radius: ${this.props.borderRadius || '0px'};
                            margin-top: ${this.props.marginTop || '0px'};
                            margin-bottom: : ${this.props.marginBottom || '0px'};
                            margin-left: ${this.props.marginLeft || '0px'};
                            margin-right: ${this.props.marginRight || '0px'};
                            background-color: ${this.props.backgroundColor || 'transparent'};
                            padding:0px;
                            justify-content: center;
                            align-content: center;
                            display: grid;
                        }
                        div:hover{
                            background-color: ${this.props.color || 'black'};
                        }
                    `}</style>
                </div>
            </a>
        );
    }
}