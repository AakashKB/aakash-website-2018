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
            <section className='skills-section'>
                <h1>Skills at a glance</h1>
                <div className="skills-container">
                    <div className="skills-container-sub">
                        {this._renderSkillsFromArray(skills)}
                    </div>
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
                    .skills-section :global(.bordered-button){
                        font-size: 36px;
                    }
                    
                    .skills-section{
                        display: grid;
                        grid-template-columns: 1fr;
                        text-align: center;
                    }
                    
                    .skills-container{
                        display: grid;
                        grid-template-columns: 10% 1fr 10%;
                        margin-top: 50px;
                    }
                    
                    .skills-container-sub{
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-column: 2/3;
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

                    @media only screen and (max-width: 768px){
                        .skills-container-sub{
                        }
                        
                        .skills-container{
                            margin-top: 25px;
                            grid-template-columns: 5% 1fr 5%;
                        }

                        h1{
                            font-size: 36px;
                            margin-top: 25px;
                        }

                        p{
                            font-size: 18px;
                            margin-top: 25px;
                        }   

                        .skills-section :global(.bordered-button){
                            width: 150px;
                            height: 38px;
                            font-size: 24px;
                        }

                        .button-text{
                            font-size: 24px;
                            color: ${Colors.primary};
                        }
                    }
                `}</style>
                
            </section>
        );
    }
}