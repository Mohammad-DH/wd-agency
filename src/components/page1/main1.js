import React from 'react';
import bg from './bg.jpg'

const slider = ()=>{
    document.addEventListener('DOMContentLoaded',function(){
        let wrapper = document.getElementById('wrapper');
        let toplayer = wrapper.querySelector('.top');
        let handle = wrapper.querySelector('.handle');
        let skew = 0
        let delta = 0
    
        if (wrapper.className.indexOf('skewed')!==-1) {
            skew = 1000
        }
        wrapper.addEventListener('mousemove', function(e){
            delta = (e.clientX - window.innerWidth /2)*0.5
            handle.style.left = e.clientX + delta + 'px';
            toplayer.style.width = e.clientX + skew + delta + 'px';
        })
    })
};
slider();
const Main1 = ()=>{
    return(
        <div>
            <div className='page1'>


                <img className="m-view mobile-page1" src={bg}></img>
                
                <section id="wrapper" className="d-view skewed">
                    <div className="layer bottom">
                        <div className="content-wrap">
                        <img src={require("./picc1.jpg")} alt='web design agency'></img>
                        </div>
                    </div>  
                    
                    <div className="layer top">
                        <div className="content-wrap">
                            <img src={require("./picc2.jpg")} alt='web design agency'/>
                        </div>
                    </div>    
                    <div className="handle" />
                </section>
              
                    <div className='page1-card'>
                        <p>For the purpose of making a better world for business owners and customers, to trade easily and enjoyable we make the most unique websites, using the latest technology and modernest techniques follow by adding the element of creativity ;</p>
                        <p className='d-view page1-card-text2'>and we <u>suport our customers from start to the end</u>.</p>
                        <p className='m-view page1-card-text22'>and we suport our customers from start to the end.</p>
                        <div className='page1-card2'>
                            <p>
                                we save your business from being boring
                            </p>
                        </div>    
                    </div>

            </div>
        </div>
    );

};

export default Main1;