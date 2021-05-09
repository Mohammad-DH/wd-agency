import React,{useState,useEffect} from 'react';
import {useWindowScroll} from 'react-use';


const Scrollbar = ()=>{
    const {y} = useWindowScroll()
    const [scrolled, setscrolled] = useState(0)

    useEffect(() => {
        const height = document.documentElement.scrollHeight-document.documentElement.clientHeight;
        setscrolled(((y/height)*100))
        
    }, [y])



    return(
        <div className='d-view'>
            <div className='scrollbar'>
                <div className="scrollbar-background">  
                    <div className="scrollbar-pragrph" style={{height:`${scrolled}%`}}>
                            <div className="p-bar">
                                <p>p</p>
                                <p>r</p>
                                <p>o</p>
                                <p>g</p>
                                <p>r</p>
                                <p>e</p>
                                <p>s</p>
                                <p>s</p>
                                <br />
                                <p>b</p>
                                <p>a</p>
                                <p>r</p>
                            </div>
                            <div className="end">
                                <p>e</p>
                                <p>n</p>
                                <p>d</p>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    );

};

export default Scrollbar;