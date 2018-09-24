import { Component } from 'react';
import BorderedButton from './BorderedButton';

export default class IconBorderedButton extends Component{
    state = {
        iconColor: this.props.iconColor || 'black'
    }
    render(){
        const Icon = this.props.icon;
        return(
            <BorderedButton
                {...this.props}
                onMouseOver={()=>this.setState({iconColor:this.props.iconHoverColor||'white'})}
                onMouseOut={()=>this.setState({iconColor:this.props.iconColor||'black'})}
            >
                <Icon size={this.props.iconSize} color={this.state.iconColor}/>
            </BorderedButton>
        );
    }
}