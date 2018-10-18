import Header from '../components/Header';
import Intro from '../components/Intro';
import Skills from '../components/Skills';
import Activities from '../components/Activities';
import ContactFooter from '../components/ContactFooter';

/* TODO: 
*   1. Check mobile responsiveness, althought it seems to work, it does not. Maybe worry about orientation?
*   5. Fix Activity Card zoom
*   2. Refactor CSS including browser optimization
*   3. Add Favicon
*   4. Optimize based on google insights
*   5. Check design with Renoj
*/
const Index = (props) => (
    <div>
        <Header/>
        <Intro/>
        <Skills/>
        <Activities/>
        <ContactFooter/>
        <style jsx global>{`
            @import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700");

            body{
                margin: 0;
                font-family: 'Roboto Condensed', sans-serif;
            }    

            input:focus,
            select:focus,
            textarea:focus,
            button:focus {
                outline: none;
            }
        `}</style>
    </div>
);


export default Index;
