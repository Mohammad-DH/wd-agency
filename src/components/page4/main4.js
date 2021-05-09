import React from 'react';
import Buziness from './buz.svg';


const paralax = (e)=>{
    let paralaxSVG = document.querySelector('#biz'); 

    let w = window.innerWidth /2;
    let h = window.innerHeight /2;
    let parSVGx = `${5-(e.clientX-w)*0.02}%`
    let parSVGy = ` ${5-(e.clientY-h)*0.02}%`
    
    paralaxSVG.style.paddingRight = parSVGx;
    paralaxSVG.style.paddingBottom = parSVGy;

}
const helper = ()=>{
    document.querySelector('.nav').classList.add('click')
    setTimeout(() => {
        document.querySelector('.nav').classList.remove('click')
    }, 1000);

}
const Main4 = ()=>{
    return(
        <div>

            <div onMouseMove={paralax} className='page4'>

                <div className="biz-bg">
                    <div className='buzinessbg'></div>
                    
                    <div className="bus-bg text1">
                        <div>
                        <span>   digital business </span>agency-<span> digital business </span>agency  -  
                        <span>   digital business </span>agency-<span> digital business </span>agency  -
                        <br />
                        </div>
                        <div>
                        <span>   digital business </span>agency-<span> digital business </span>agency  -  
                        <span>   digital business </span>agency-<span> digital business </span>agency  -
                        <br />
                        </div>
                    </div>
                    <div className="bus-bg text2">
                        <div>
                        <span>   digital business </span>agency-<span> digital business </span>agency  -  
                        <span>   digital business </span>agency-<span> digital business </span>agency  -
                        <br />
                        </div>
                        <div>
                        <span>   digital business </span>agency-<span> digital business </span>agency  -  
                        <span>   digital business </span>agency-<span> digital business </span>agency  -
                        <br />
                        </div>
                    </div>
                    <div className="bus-bg text3">
                        <div>
                        <span>   digital business </span>agency-<span> digital business </span>agency  -  
                        <span>   digital business </span>agency-<span> digital business </span>agency  -
                        <br />
                        </div>
                        <div>
                        <span>   digital business </span>agency-<span> digital business </span>agency  -  
                        <span>   digital business </span>agency-<span> digital business </span>agency  -
                        <br />
                        </div>
                    </div>
                    <div className="bus-bg text4">
                        <div>
                        <span>   digital business </span>agency-<span> digital business </span>agency  -  
                        <span>   digital business </span>agency-<span> digital business </span>agency  -
                        <br />
                        </div>
                        <div>
                        <span>   digital business </span>agency-<span> digital business </span>agency  -  
                        <span>   digital business </span>agency-<span> digital business </span>agency  -
                        <br />
                        </div>
                    </div>
                    </div>
                
                <img onClick={helper} className='biz' id='biz' src={Buziness}></img>

                
                
            </div>
            
        </div>
    );

};

export default Main4;