import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cards from './cards/cards'
import Slider from './slider/Slider'
import BG from './projects.svg'
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.jpg'
import image5 from './images/image5.jpg'


const Main3 = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.from('.cards-slide ', 3, {
            opacity: 0,
            y: 200,
            scrollTrigger: {
                trigger: '.cards-slide',
                start: ' bottom center',
                end: 'bottom bottom',
            }, stagger: .2
        })
    }, [])

    return (
        <div >
            <div className='page3'>
                <img className='d-view page3-bg' src={BG}></img>
                <div className='maine-cards'>

                    <Cards link='https://www.google.com' image={image5} name='Project1' discription='Text made by lorem : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis ipsa eveniet sequi accusantium expedita exercitationem facilis? Hic ut earum mollitia rem autem! Reiciendis beatae porro corporis sint rem nihil.' />
                    <Cards link='https://www.google.com' image={image2} name='Project2' discription='Text made by lorem : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis ipsa eveniet sequi accusantium expedita exercitationem facilis? Hic ut earum mollitia rem autem! Reiciendis beatae porro corporis sint rem nihil.' />
                    <Cards link='https://www.google.com' image={image3} name='Project3' discription='Text made by lorem : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis ipsa eveniet sequi accusantium expedita exercitationem facilis? Hic ut earum mollitia rem autem! Reiciendis beatae porro corporis sint rem nihil.' />
                    <Cards link='https://www.google.com' image={image4} name='Project4' discription='Text made by lorem : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis ipsa eveniet sequi accusantium expedita exercitationem facilis? Hic ut earum mollitia rem autem! Reiciendis beatae porro corporis sint rem nihil.' />
                    <Cards link='https://www.google.com' image={image1} name='Project5' discription='Text made by lorem : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis ipsa eveniet sequi accusantium expedita exercitationem facilis? Hic ut earum mollitia rem autem! Reiciendis beatae porro corporis sint rem nihil.' />
                </div>

            </div>
            <div className='m-view slider'>
                <span className='sts'>
                    scroll to side
                </span>
                <Slider link='https://www.google.com' image={image5} name='Project1' discription='Text made by lorem : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis ipsa eveniet sequi accusantium expedita exercitationem facilis? Hic ut earum mollitia rem autem! Reiciendis beatae porro corporis sint rem nihil.' />
                <Slider link='https://www.google.com' image={image2} name='Project2' discription='Text made by lorem : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis ipsa eveniet sequi accusantium expedita exercitationem facilis? Hic ut earum mollitia rem autem! Reiciendis beatae porro corporis sint rem nihil.' />
                <Slider link='https://www.google.com' image={image3} name='Project3' discription='Text made by lorem : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis ipsa eveniet sequi accusantium expedita exercitationem facilis? Hic ut earum mollitia rem autem! Reiciendis beatae porro corporis sint rem nihil.' />
                <Slider link='https://www.google.com' image={image4} name='Project4' discription='Text made by lorem : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis ipsa eveniet sequi accusantium expedita exercitationem facilis? Hic ut earum mollitia rem autem! Reiciendis beatae porro corporis sint rem nihil.' />
                <Slider link='https://www.google.com' image={image1} name='Project5' discription='Text made by lorem : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis ipsa eveniet sequi accusantium expedita exercitationem facilis? Hic ut earum mollitia rem autem! Reiciendis beatae porro corporis sint rem nihil.' />

            </div>

        </div>
    );

};

export default Main3;