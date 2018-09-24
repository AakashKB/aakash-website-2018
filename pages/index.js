import Header from '../components/Header'

const Index = (props) => (
    <div>
        <Header/>
        <style jsx global>{`
            @import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

            body{
                margin: 0;
                font-family: 'Roboto Condensed', sans-serif;
            }    
        `}</style>
    </div>
);


export default Index;
