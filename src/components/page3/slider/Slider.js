import React, { useState } from 'react'

function Slider(props) {


    const [Index, setIndex] = useState(0)

    const click = (index) => {
        setIndex(index)
    }

    return (


        <div className='m-view main-slider'>
            <div className='inner-slider'>

                <div className={Index === 1 ? "card-wrapper flip-left" : "card-wrapper flip-left-back"}>
                    <div className="card">
                        <div onClick={() => click(1)} className="front"><img src={props.image}></img></div>
                        <div onClick={() => click(-1)} className="back">
                            <h3 className='name'>{props.name}</h3>
                            <p className='discription'>{props.discription}</p>
                            <a target='_blank' rel="noopener noreferrer" href={props.link} className='visit'>visit</a>
                        </div>

                    </div>
                </div>

            </div>
        </div>


    )
}

export default Slider;
