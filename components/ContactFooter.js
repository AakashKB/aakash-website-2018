import { Component } from 'react';
import Colors from '../constants/Colors';
import TextBorderedButton from './TextBorderedButton';

export default class ContactFooter extends Component {

    render() {
        return (
            <section className='section-contact'>
                <div className='background'></div>
                <h1>Interested in working with me?</h1>
                <h2>Awesome! Let me know how I can help you below!</h2>
                <div className='container-contact-form'>
                    <form className='contact-form' onSubmit={event => { alert('Submitted') }}>
                        <div className='labeled-input'>
                            <label>
                                First name
                            </label>
                            <input type='text' value={''} onChange={() => { }} />
                        </div>
                        <div className='labeled-input'>
                            <label>
                                Last name
                            </label>
                            <input type='text' value={''} onChange={() => { }} />
                        </div>
                        <div className='labeled-input long'>
                            <label>
                                Email
                            </label>
                            <input type='text' value={''} onChange={() => { }} />
                        </div>
                        <div className='labeled-input long'>
                            <label>
                                Message
                            </label>
                            <textarea type='text' value={''} onChange={() => { }} />
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
                    </form>
                </div>
                <footer></footer>

                <style jsx>{`
                    .section-contact{
                        display: grid;
                        grid-template-columns: 1fr;
                        grid-template-rows: auto auto 1fr 100px auto;
                        text-align: center;
                    }
                    
                    .container-contact-form{
                        display: grid;
                        grid-column: 1/2;
                        grid-row: 3/5;
                        background-color: white;
                        border-radius: 30px;
                        box-shadow: 0px 4px 5px rgb(0,0,0,0.1);
                        margin: 50px 30% 0px;
                        border: 0.5px solid ${Colors.grayLighter};
                    }
                    
                    .contact-form{
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-column-gap: 5%;
                        font-size: 24px;
                        font-weight: 300;
                        padding: 10px 10% 25px;
                    }
                    
                    .contact-form > :global(a){
                        grid-column: 1/3;
                    }
                    
                    .contact-form :global(.bordered-button-text){
                        margin: auto;
                        font-family: 'Roboto Condensed', sans-serif;
                        font-size: 36px;
                    }

                    .labeled-input{
                        display: grid;
                        grid-template-columns: 1fr;
                        text-align: left;
                        margin: 25px 0px 0px;
                    }

                    .labeled-input > label{
                        color: ${Colors.grayLight};
                    }
                    
                    .labeled-input > input{
                        height: 30px;
                        border-radius: 10px;
                        border: 1px solid ${Colors.grayLighter};
                        margin-top: 10px;
                        padding: 5px;
                    }

                    .labeled-input > textarea{
                        height: 150px;
                        border-radius: 10px;
                        border: 1px solid ${Colors.grayLighter};
                        margin-top: 10px;
                        padding: 5px;
                    }

                    .long{
                        grid-column: 1/3;
                    }

                    .background{
                        grid-row: 4/6;
                        grid-column: 1/2;
                        background-color: ${Colors.primary};
                    }

                    h1{
                        color: ${Colors.grayDark};
                        font-size: 48px;
                        font-weight: 700;
                        margin: 0px;
                        margin-top: 50px;
                        grid-column: 1/2;
                    }  

                    h2{
                        color: ${Colors.grayLight};
                        font-size: 36px;
                        font-weight: 400;
                        margin: 0px;
                        grid-column: 1/2;
                    }

                    @media only screen and (max-width: 768px){
                        h1{
                            font-size: 36px;
                            margin-top: 25px;
                        }

                        h1{
                            font-size: 24px;
                        }
                    }
                `}</style>

            </section>
        );
    }
}