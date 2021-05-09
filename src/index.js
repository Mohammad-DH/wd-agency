import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/intro/intro'
import Nav from './components/nav/nav'
import Mnav from './components/m-nav/m-nav'
import Tabs from './components/tabs/tabs'
import Main1 from './components/page1/main1'
import Main2 from './components/page2/main2'
import Main2mobile from './components/page2/main2-mobile'
import Main3 from './components/page3/main3'
import Main4 from './components/page4/main4'
import Scrollbar from './components/scrollbar/scrollbar'




const App = () => {


    const [tabs, settabs] = useState(0)
    const changetabs = (index) => {
        settabs(index)
    }



    return (
        <div className='body'>
            <Intro />
            <Tabs index={tabs} />
            <Main1 />
            <Main2mobile />
            <Main2 />
            <Main3 />
            <Main4 />
            <Nav />
            <Mnav tabs={changetabs} index={tabs} />
            <Scrollbar />


        </div>
    );

};



ReactDOM.render(<App />, document.querySelector('#root'))




