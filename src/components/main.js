import React from 'react';
import { TypeAnimation } from 'react-type-animation';
// import {HiOutlineArrowNarrowDown} from 'react-icons/hi';
import './background.css';
import NavigationBar from './navbar'
export default function Homepage() {
    // const scrollDown = () =>{
    //     window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
    //     };

    return (
        //from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
        <div className = ' bg-gradient-to-b from-[#040d30] from-40% via-[#383d95] via-70%  to-[#4c89c1] to-100% h-[110vh] w-screen'>
            <NavigationBar/>
             <div className="flex justify-center ">
            
        <div className="text-center absolute top-[43%] ">
            
          <TypeAnimation
            sequence={[        'Hi, I\'m Xiaofan 👋',        1000,        'Welcome to my website! 👩🏻‍💻',        1000,      ]}
            wrapper="span"
            cursor={true}
            // repeat={Infinity}
            style={{ fontSize: '4em', display: 'inline-block', color: 'white' }}
          />
        </div>
      </div>
      </div>

      
    )
}