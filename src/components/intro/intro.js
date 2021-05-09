import React, { useState } from 'react';



const introbtn = () => {
    let intro = document.querySelector('.intro')
    window.removeEventListener('scroll', noScroll);
    intro.classList.add('intro-transition')
    document.querySelector('.scrollbar').style.opacity = 1;
}

function noScroll() {
    window.scrollTo(0, 0)
};
window.addEventListener('scroll', noScroll);



const Intro = () => {
    const [loading, setloading] = useState(1)
    setTimeout(() => {
        setloading(0)
    }, 6000);

    return (
        <div>
            <div className="intro">
                <h3>This Is A</h3>
                <h1>Web Development </h1>
                <h2>agency</h2>
                <span className="intro-span">our JOB is to <br /> turn your idea to a REALITY</span>
                <br />
                <button className={loading === 0 ? "introbtn" : "deactive"} onClick={introbtn}>take look</button>
                <span className={loading === 1 ? "loading" : "deactive"}>loading</span>
            </div>

        </div>
    );

};

export default Intro;