import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import htmlimage from './html.svg'
import cssimage from './icons/css.svg'
import bootstrapimage from './icons/bootstrap.svg'
import gsapimage from './icons/gsap.svg'
import javascriptimage from './icons/javascript-2.svg'
import sassimage from './icons/sass.svg'
import reduximage from './icons/redux.svg'
import reactimage from './icons/react-2.svg'
import nodejsimage from './icons/nodejs-1.svg'
import photoshopimage from './icons/photoshop.svg'
import xdimage from './icons/xd.svg'
import illustratorimage from './icons/illustrator.png'
import figmaimage from './icons/figma.png'
import frogimage from './icons/frog.png'
import analyticsimage from './icons/analytics.png'
import gtmetriximage from './icons/gtmetrix.svg'
import facebookimage from './icons/facebook.svg'
import instagramimage from './icons/instagram.svg'
import twitterimage from './icons/twitter.svg'
import pagespeedimage from './icons/pagespeed.svg'
import semrushimage from './icons/semrush.png'
import greenboneimage from './icons/greenbone.png'




const Main2 = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.from('.anim', 3, {
            opacity: 0,
            scrollTrigger: {
                trigger: '.anim',
                start: ' center center',
                end: 'bottom top',
            }, stagger: .5
        })
    }, [])



    return (
        <div>
            <div className='d-view page2'>
                <div className='page2-left'>
                    <div className='main-box'>
                        <div className='box1'>
                            <p>design<br /> & <br /> devlop</p>
                            <div className='anim'>
                                <img src={htmlimage}></img>
                                <img src={cssimage}></img>
                                <img src={bootstrapimage}></img>
                                <img src={sassimage}></img>
                                <img src={javascriptimage}></img>
                                <img src={gsapimage}></img>
                                <img src={reduximage}></img>
                                <img src={reactimage}></img>
                                <img src={nodejsimage}></img>

                            </div>

                        </div>
                        <div className='box2 ' >
                            <p>pre-design</p>
                            <div className='anim'>
                                <img src={photoshopimage}></img>
                                <img src={xdimage}></img>
                                <img src={illustratorimage}></img>
                                <img src={figmaimage}></img>
                            </div>

                        </div>
                        <div className='box3' >
                            <p>optimizing</p>
                            <div className='op-div1 anim' >
                                <img src={frogimage}></img>
                                <img src={gtmetriximage}></img>
                                <img src={analyticsimage}></img>
                                <img src={pagespeedimage}></img>
                                <img src={semrushimage}></img>
                                <img src={greenboneimage}></img>
                            </div>
                        </div>
                        <div className='box4 ' >
                            <p>advertyising</p>
                            <div className='anim'>
                                <img src={facebookimage}></img>
                                <img src={instagramimage}></img>
                                <img src={twitterimage}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='page2-right'>
                    <div className='right-box'>
                        <div className=' right-inner'>
                            <span>1</span>
                            <p>pre-design</p>
                        </div>
                        <div className=' right-inner'>
                            <span>2</span>
                            <p>design & devlop</p>
                        </div>
                        <div className=' right-inner'>
                            <span>3</span>
                            <p>optimizing</p>
                        </div>
                        <div className=' right-inner'>
                            <span>4</span>
                            <p>advertyising</p>
                        </div>
                        <div className=' right-inner'>
                            <span>5</span>
                            <p>marketing</p>
                        </div>
                        <div className=' right-inner'>
                            <span>6</span>
                            <p>business devlopment</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );

};

export default Main2;