import React from 'react';
import './App.css';
import { Helmet } from "react-helmet";
import ScrollHandler from './components/ScrollHandler';
import Zone1 from './components/Zone1.jsx';
import Zone2 from './components/Zone2.jsx';
import Zone3 from './components/Zone3.jsx';
import Zone4 from './components/Zone4.jsx';
import Zone5 from './components/Zone5.jsx';
import Zone6 from "@/components/Zone6.jsx";
import Zone7 from "@/components/Zone7.jsx";
import Zone8 from "@/components/Zone8.jsx";
import Zone9 from "@/components/Zone9.jsx";
import Zone10 from "@/components/Zone10.jsx";
import Zone11 from "@/components/Zone11.jsx";
import Zone12 from "@/components/Zone12.jsx";


function App() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Théo Cerkownik</title>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"/>
            </Helmet>
            <ScrollHandler>
                <Zone1 />
                <Zone2 />
                <Zone3 />
                <Zone4 />
                <Zone5 />
                <Zone6/>
                <Zone7 />
                <Zone8 />
                <Zone9/>
                <Zone10/>
                <Zone11/>
                <Zone12/>
            </ScrollHandler>
        </>
    );
}

export default App;
