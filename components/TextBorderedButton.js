import { Component } from 'react';
import BorderedButton from './BorderedButton';

export default class TextBorderedButton extends Component{
    state = {
        textColor: this.props.textColor || 'black'
    }
    render(){
        return(
            <BorderedButton
                {...this.props}
                onMouseOver={()=>this.setState({textColor:this.props.textHoverColor||'white'})}
                onMouseOut={()=>this.setState({textColor:this.props.textColor||'black'})}
            >
                <p className='bordered-button-text' style={{color:this.state.textColor}}>{this.props.text}</p>
            </BorderedButton>
        );
    }
}