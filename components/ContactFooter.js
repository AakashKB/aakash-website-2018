import { Component } from 'react';
import Colors from '../constants/Colors';
import TextBorderedButton from './TextBorderedButton';

export default class ContactFooter extends Component{

    render(){
        return(
            <section className='section-contact'>
                <h1>Interested in working with me?</h1>
                <h2>Awesome! Let me know how I can help you below!</h2>
                <div className='container-contact-form'>
                    <form>

                    </form>
                </div>
                <div className='background'></div>
                <footer></footer>
                {/* <TextBorderedButton
                    width='200px'
                    height='50px'
                    color={Colors.primary}
                    borderRadius='30px'
                    borderWidth='2px'
                    marginLeft='auto'
                    marginRight='auto'
                    marginTop='10px'
                    text='Resumé'
                    textColor={Colors.primary}
                /> */}
                
                <style jsx>{`
                    .section-contact{
                        display: grid;
                        grid-template-columns: 1fr;
                        grid-template-rows: auto auto 1fr 100px auto;
                        text-align: center;
                    }
                    
                    .container-contact-form{
                        display: grid;
                    }
                    
                    .background{
                        grid-row: 4/6;
                        background-color: ${Colors.primary};
                    }
                    h1{
                        color: ${Colors.grayDark};
                        font-size: 48px;
                        font-weight: 700;
                        margin: 0px;
                        margin-top: 50px;
                    }  

                    h2{
                        color: ${Colors.grayLight};
                        font-size: 36px;
                        font-weight: 400;
                        margin: 0px;
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