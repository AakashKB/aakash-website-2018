import {Component} from 'react';
import IconBorderedButton from './IconBorderedButton';

export default class IconLinks extends Component{
  
    _renderIconBorderedButton = (key, {icon,href,target}) => (
        <IconBorderedButton 
            borderWidth='2px' 
            borderRadius='100px' 
            iconSize={30} 
            icon={icon}
            color={this.props.color}
            iconColor={this.props.color}
            iconHoverColor={this.props.iconHoverColor}
            href={href}
            target={target}
            key={key}
        />
    );

    render(){ 
        return(
            <div className='links'>
                {this.props.icons.map((icon,index) => this._renderIconBorderedButton(index, icon))}
                <style jsx>{`
                    .links{
                        display: grid;
                        grid-auto-flow: column;
                        grid-column-gap: 10px;
                        justify-self: end;
                        margin-top: 25px;
                        margin-right: 25px;
                    }

                    @media only screen and (max-width:768px){
                        .links{
                            margin-right: 15px;
                            grid-column-gap: 5px;
                        }

                        .links :global(.bordered-button-icon){
                            width: 20px;
                            height: 20px;
                        }

                        .links :global(.bordered-button){
                            width: 40px;
                            height: 40px;
                        }
                    }
                `}</style>
            </div>
        );
    }
}