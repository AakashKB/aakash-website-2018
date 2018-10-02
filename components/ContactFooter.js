import { Component } from 'react';
import Colors from '../constants/Colors';
import ContactForm from './ContactForm';
import TextBorderedButton from './TextBorderedButton';

export default class ContactFooter extends Component {

    render() {
        return (
            <section className='section-contact'>
                <div className='background'></div>
                <h1>Interested in working with me?</h1>
                <h2>Awesome! Let me know how I can help you below!</h2>
                <ContactForm/>
                <footer>
                    <img className = 'avatar' src='https://s3.amazonaws.com/practice-aakash/avatar_wink.svg'/>
                    <p>© Aakash Balaji 2018</p>
                    <TextBorderedButton
                        width='200px'
                        height='50px'
                        color={'white'}
                        borderRadius='30px'
                        borderWidth='2px'
                        marginLeft='auto'
                        marginRight='auto'
                        marginTop='10px'
                        text='Resumé'
                        textColor={'white'}
                        textHoverColor={Colors.primary}
                    />
                </footer>

                <style jsx>{`
                    .section-contact{
                        display: grid;
                        grid-template-columns: 1fr;
                        grid-template-rows: auto auto 1fr 100px auto;
                        text-align: center;
                    }

                    .section-contact > :global(.contact-form){
                        grid-column: 1/2;
                        grid-row: 3/5;
                    }
                    
                    .background{
                        grid-column: 1/2;
                        grid-row: 4/6;
                        background-color: ${Colors.primary};
                    }
                    
                    footer{
                        grid-column: 1/2;
                        grid-row: 5/6;
                        display: grid;
                        justify-content: center;
                    }

                    footer .avatar{
                        margin: 25px auto 0px;
                        height: 50px;
                    }

                    footer p{
                        color:white;
                        font-size: 24px;
                        margin: 0px;
                        margin-top: 10px;
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

                    footer :global(.bordered-button-text){
                        margin: auto;
                        font-family: 'Roboto Condensed', sans-serif;
                        font-size: 36px;
                    }

                    @media only screen and (max-width: 768px){
                        h1{
                            font-size: 36px;
                            margin-top: 25px;
                        }

                        h2{
                            font-size: 24px;
                        }
                    }
                `}</style>

            </section>
        );
    }
}