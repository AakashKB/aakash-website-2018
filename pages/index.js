import Header from '../components/Header';
import Intro from '../components/Intro';
import Skills from '../components/Skills';
import Activities from '../components/Activities';
import ContactFooter from '../components/ContactFooter';
import Head from 'next/head'

/* TODO: 
*   1. Check mobile responsiveness, althought it seems to work, it does not. Maybe worry about orientation?
*   5. Fix Activity Card zoom
*   2. Refactor CSS including browser optimization
*   3. Add Favicon
*   4. Optimize based on google insights
*/

const Index = (props) => (
    <div>
        <Head>
            <title>Aakash Balaji</title>
            <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
        </Head>
        <Header />
        <Intro />
        <Skills />
        <Activities />
        <ContactFooter />
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
