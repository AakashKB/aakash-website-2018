import Header from '../components/Header';
import Intro from '../components/Intro';
import Skills from '../components/Skills';
import Activities from '../components/Activities';

const Index = (props) => (
    <div>
        <Header/>
        <Intro/>
        <Skills/>
        <Activities/>
        <style jsx global>{`
            @import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700");

            body{
                margin: 0;
                font-family: 'Roboto Condensed', sans-serif;
            }    
        `}</style>
    </div>
);


export default Index;
