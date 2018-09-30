import Header from '../components/Header';
import Intro from '../components/Intro';
const Index = (props) => (
    <div>
        <Header/>
        <Intro/>
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
