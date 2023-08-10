import React, {useState, useEffect} from 'react';
import { TypeAnimation } from 'react-type-animation';
// import {HiOutlineArrowNarrowDown} from 'react-icons/hi';

import './night.css';
import './day.css';
import './night2.css';
import { init } from './night2.js';
import NavigationBar from '../components/navbar'
import {TbSunset, TbSunrise} from 'react-icons/tb';
export default function Mainpage() {
    // const scrollDown = () =>{
    //     window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
    //     };
    const [theme, setTheme] = useState(true);
    const toggleTheme = () => {
      setTheme(!theme);
    };

    useEffect(() => {
      if(theme){init();}

    }, [theme]); // Add theme as a dependency
    return (
      
        <div className = {`h-screen w-screen ${theme && 'bg-gradient-to-b from-[#040d30] from-40% via-[#383d95] via-70%  to-[#4c89c1] to-100%'}`}>
          {/* <NavigationBar/> */}

        {theme ? 
        <div>

<div class="noite"></div>

<div class="constelacao"></div>

<div class="lua">
  <div class="textura"></div>
</div>

<div class="chuvaMeteoro"></div>
{/* <script src = ></script> */}
<div class="floresta">
  <img src="https://raw.githubusercontent.com/interaminense/starry-sky/master/src/img/bgTree.png" alt="" />
</div>
      </div> : 
      <div class="totalcontainer"> 
      <div class="laya-please layer-1">
          </div>
          <div class="laya-please layer-2">
          </div>
          <div class="container1">
              <div class="laya-please layer-3">
              </div>
              <div class="laya-please layer-4">
              </div>
              <div class="laya-please layer-5">
              </div>
              <div class="laya-please layer-6">
              </div>
          </div>

    <div class="container2">
        <div class="laya-please layer-7">
        </div>
        <div class="laya-please layer-8">
        </div>
    </div>
</div>}

             <div className="flex justify-center "> 
        <div className="text-center absolute top-[43%] ">
          <TypeAnimation
            sequence={[        'Hi, I\'m Xiaofan 👋',        1000,        'Welcome to my website!   👩🏻‍💻',        1000,      ]}
            wrapper="span"
            cursor={true}
            // repeat={Infinity}
            style={{ fontSize: '4em', display: 'inline-block', color: 'white' }}
          />
          <br/>
                       <button onClick = {toggleTheme} className = "text-white scale-150">
                        <div className = "transform hover:scale-125 transition duration-300 ease-in-out mt-2">
                        <div className = "animate-bounce">
                       {theme ? <TbSunrise/> : <TbSunset/>}
                       </div>
                       </div>
        </button>
        </div>
      </div>
      </div>

      
    )
}