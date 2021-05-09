import React from 'react';
import htmlimage from './html.svg'
import cssimage from './icons/css.svg'
import bootstrapimage from './icons/bootstrap.svg'
import gsapimage from './icons/gsap.svg'
import javascriptimage from './icons/javascript.svg'
import sassimage from './icons/sass.svg'
import reduximage from './icons/redux.svg'
import reactimage from './icons/react-2.svg'
import nodejsimage from './icons/nodejs.svg'
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

const Main2mobile = () => {
    return (
        <div className=' m-view m-page2'>
            <div className='m-page2-bg'>
                <p>TOOL's</p>
                <p>&</p>
                <p>TECH</p>
            </div>
            <div className='t1'>
                <img className='scroll-img' src={photoshopimage} />
                <img className='scroll-img' src={xdimage} />
                <img className='scroll-img' src={illustratorimage} />
                <img className='scroll-img' src={figmaimage} />
                <p>pre-design</p>
            </div>
            <div className='t1 v2'>
                <img className='scroll-img' src={htmlimage} />
                <img className='scroll-img' src={cssimage} />
                <img className='scroll-img' src={bootstrapimage} />
                <img className='scroll-img' src={sassimage} />
                <img className='scroll-img' src={javascriptimage} />
                <img className='scroll-img' src={gsapimage} />
                <img className='scroll-img' src={reactimage} />
                <img className='scroll-img' src={reduximage} />
                <img className='scroll-img' src={nodejsimage} />
                <p>design & devlop</p>
            </div>
            <div className='t1 v3'>
                <img className='scroll-img' src={frogimage} />
                <img className='scroll-img' src={gtmetriximage} />
                <img className='scroll-img' src={analyticsimage} />
                <img className='scroll-img' src={pagespeedimage} />
                <img className='scroll-img' src={semrushimage} />
                <p>optimizing</p>
            </div>
            <div className='t1 v4'>
                <img className='scroll-img' src={facebookimage} />
                <img className='scroll-img' src={instagramimage} />
                <img className='scroll-img' src={twitterimage} />
                <p>advertyising</p>
            </div>
            <div className='t1 v5'>
                <p>marketing</p>
            </div>
            <div className='t1 v6'>
                <p>business devlopment</p>
            </div>

        </div>
    );

};

export default Main2mobile;