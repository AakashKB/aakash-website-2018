import { Component } from 'react';
import Colors from '../constants/Colors';
import TextBorderedButton from './TextBorderedButton';
import {FaRedo} from 'react-icons/fa';
import { IconContext } from "react-icons";

export default class ContactForm extends Component {

    handleReset = (event) => {
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });
        event.preventDefault();
    }

    render() {
        return (
            <form 
                className='contact-form' 
                method='POST'
                action='//formspree.io/aakashkbalaji@gmail.com'
                ref={(self)=>this.myForm = self}
                onReset={()=> this.myForm.reset()}
            >
                <div className='labeled-input'>
                    <label>
                        First name
                    </label>
                    <input type='text' name='firstName'/>
                </div>
                <div className='labeled-input'>
                    <label>
                        Last name
                    </label>
                    <input type='text' name='lastName'/>
                </div>
                <div className='labeled-input long'>
                    <label>
                        Email
                    </label>
                    <input type='email' name='email'/>
                </div>
                <div className='labeled-input long'>
                    <label>
                        Message
                    </label>
                    <textarea name='message'/>
                </div>
                <TextBorderedButton
                    width='200px'
                    height='50px'
                    color={Colors.primary}
                    borderRadius='30px'
                    borderWidth='2px'
                    marginLeft='auto'
                    marginRight='auto'
                    marginTop='25px'
                    text='Submit'
                    textColor={Colors.primary}
                    buttonType='submit'
                />
                <IconContext.Provider value={{className: "icon-reset" }}>
                    <button className='button-reset' type='reset'>
                        <FaRedo size={20} color={Colors.grayLight}/>
                    </button>
                </IconContext.Provider>
                <style jsx>{`
                    .contact-form{
                        display: grid;
                        position: relative;
                        grid-template-columns: 1fr 1fr;
                        grid-column-gap: 5%;
                        background-color: white;
                        border-radius: 30px;
                        border: 0.5px solid ${Colors.grayLighter};
                        box-shadow: 0px 4px 5px rgb(0,0,0,0.1);
                        margin: 50px 30% 0px;
                        padding: 10px 2.5% 25px;
                        font-size: 24px;
                        font-weight: 300;
                    }

                    .labeled-input{
                        display: grid;
                        text-align: left;
                        margin: 25px 0px 0px;
                    }

                    .labeled-input > label{
                        color: ${Colors.grayLight};
                    }

                    .labeled-input > input, .labeled-input > textarea{
                        min-width: 0px;
                        height: 30px;
                        border-radius: 10px;
                        border: 1px solid ${Colors.grayLighter};
                        margin-top: 10px;
                        padding: 5px;
                        font-size: 18px;
                        font-family: 'Roboto Condensed', sans-serif;
                        font-weight: 300;
                    }

                    .labeled-input > textarea{
                        height: 150px;
                    }

                    .long{
                        grid-column: 1/3;
                    }

                    .contact-form > :global(a){
                        grid-column: 1/3;
                    }
                        
                    .contact-form :global(.bordered-button-text){
                        margin: auto;
                        font-family: 'Roboto Condensed', sans-serif;
                        font-size: 36px;
                    }

                    .button-reset{
                        background: transparent;
                        border: none;
                        margin: 0px;
                        padding: 0px;
                        position: absolute;
                        top: 20px;
                        right: 25px;
                    }

                    @media only screen and (max-width: 768px){
                        .contact-form{
                            grid-template-columns: auto;
                            margin: 50px 15% 0px;
                            padding: 25px 5% 10px;
                        }

                        .long{
                            grid-column: 1/2;
                        }

                        .contact-form > :global(a){
                            grid-column: 1/2;
                        }

                        .contact-form :global(.bordered-button){
                            width: 150px;
                            height: 38px;
                        }

                        .contact-form :global(.bordered-button-text){
                            font-size: 24px;
                        }
                        
                        .labeled-input{
                            margin: 10px 0px 0px;
                            font-size: 18px;
                        }

                        .labeled-input > input, .labeled-input > textarea{
                            height: 20px;
                            font-size: 16px;
                        }

                        .labeled-input > textarea{
                            height: 100px;
                        }

                        .button-reset{
                            top: 15px;
                            right: 15px;
                        }

                        .contact-form :global(.icon-reset){
                            width: 15px;
                            height: 15px;
                        }
                    }

                    @media only screen and (max-width: 1024px) and (min-width: 768px){
                        .contact-form{
                            margin: 50px 20% 0px;
                        }
                    }
                `}</style>
            </form>
        );
    }
}