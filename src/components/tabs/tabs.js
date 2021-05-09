import React from 'react';
import Mform from '../tabs/mform'
import Mresume from '../tabs/mresume'

const Tabs = (props)=>{

    return(
        <div className='m-view tabs'>
           
           <div className={props.index===1 ? 'active':'deactive'}>
                <Mform/>
           </div>
           <div className={props.index===-1 ? 'active':'deactive'}>
                <Mresume/>   
           </div>
           
        </div>
    );

};



export default Tabs;