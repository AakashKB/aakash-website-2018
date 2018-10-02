import { Component } from 'react';
import Colors from '../constants/Colors';
import TextBorderedButton from './TextBorderedButton';

export default class Skills extends Component{

    _renderSkillsFromArray = arr =>(
        arr.map((item, index) => (this._renderSkill(item.name, item.url, index)))
    )

    _renderSkill = (name, logoUrl, key) => (
        <div
            key={key || 0}
        >
            <h2>{name}</h2>
            <img src={logoUrl} alt={`${name} logo`}/>
            <style jsx>{`
                h2{
                    color: ${Colors.grayLight};
                    font-size: 48px;
                    font-weight: 300;
                    margin: 0px;
                    margin-top: 25px;
                }

                img{
                    margin: 25px auto 0px;
                    width: 150px;
                }

                @media only screen and (max-width: 768px){
                    h2{
                        font-size: 36px;
                    }

                    img{
                        margin: 25px auto 0px;
                        width: 100px;
                    }
                }
            `}</style>
        </div>
    );

    render(){
        const skills = [
            {
                name:'Skill',
                url:'https://s3.amazonaws.com/practice-aakash/react-icon-fit.svg'
            },
            {
                name:'Skill',
                url:'https://s3.amazonaws.com/practice-aakash/react-icon-fit.svg'
            },
            {
                name:'Skill',
                url:'https://s3.amazonaws.com/practice-aakash/react-icon-fit.svg'
            },
            {
                name:'Skill',
                url:'https://s3.amazonaws.com/practice-aakash/react-icon-fit.svg'
            },
            {
                name:'Skill',
                url:'https://s3.amazonaws.com/practice-aakash/react-icon-fit.svg'
            },
            {
                name:'Skill',
                url:'https://s3.amazonaws.com/practice-aakash/react-icon-fit.svg'
            },
            {
                name:'Skill',
                url:'https://s3.amazonaws.com/practice-aakash/react-icon-fit.svg'
            },
            {
                name:'Skill',
                url:'https://s3.amazonaws.com/practice-aakash/react-icon-fit.svg'
            }
        ];
        return(
            <section className='section-skills'>
                <h1>Skills at a glance</h1>
                <div className="skills-container">
                        {this._renderSkillsFromArray(skills)}
                </div>
                <p>Want to find out more about me? Here is my resumé.</p>
                <TextBorderedButton
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
                />
                
                <style jsx>{`
                    .section-skills{
                        display: grid;
                        grid-template-columns: 1fr;
                        text-align: center;
                    }
                    
                    .skills-container{
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        margin: 50px 10% 0px;
                    }
                    
                    h1{
                        color: ${Colors.grayDark};
                        font-size: 48px;
                        font-weight: 700;
                        margin: 0px;
                        margin-top: 50px;
                    }  

                    p{
                        font-size: 24px;
                        font-weight: 400;
                        color: ${Colors.grayLight};
                        margin: 50px 5% 0px;
                    }  

                    .section-skills :global(.bordered-button-text){
                        margin: auto;
                        font-family: 'Roboto Condensed', sans-serif;
                        font-size: 36px;
                    }

                    @media only screen and (max-width: 768px){
                        .skills-container{
                            margin: 25px 5% 0px;
                        }

                        h1{
                            font-size: 36px;
                            margin-top: 25px;
                        }

                        p{
                            font-size: 18px;
                            margin-top: 25px;
                        }   

                        .section-skills :global(.bordered-button){
                            width: 150px;
                            height: 38px;
                        }

                        .section-skills :global(.bordered-button-text){
                            font-size: 24px;
                        }
                    }
                `}</style>
                
            </section>
        );
    }
}