import React, {useState} from 'react';
import { TypeAnimation } from 'react-type-animation';
// import {HiOutlineArrowNarrowDown} from 'react-icons/hi';
import './night.css';
import './day.css';
import NavigationBar from '../components/navbar'
import {GiFallingStar} from 'react-icons/gi';
import {TbSunset, TbSunrise} from 'react-icons/tb';
export default function Mainpage() {
    // const scrollDown = () =>{
    //     window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
    //     };
    const [theme, setTheme] = useState(true);
    const toggleTheme = () => {
      setTheme(!theme);
    };
    return (
      
        <div className = {`h-screen w-screen ${theme && 'bg-gradient-to-b from-[#040d30] from-40% via-[#383d95] via-70%  to-[#4c89c1] to-100%'}`}>
          {/* <NavigationBar/> */}

        {theme ? 
        <div id="layers">
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
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
          <NavigationBar color = "text-[#690d0d]" />

    <div class="container2">
        <div class="laya-please layer-7">
        </div>
        <div class="laya-please layer-8">
        </div>
    </div>
</div>}
<NavigationBar color = "text-white"/>

             <div className="flex justify-center "> 
        <div className="text-center absolute top-[43%] ">
          <TypeAnimation
            sequence={[        'Hi, I\'m Xiaofan 👋',        1000,        'Welcome to my website! 👩🏻‍💻',        1000,      ]}
            wrapper="span"
            cursor={true}
            // repeat={Infinity}
            style={{ fontSize: '4em', display: 'inline-block', color: 'white' }}
          />
          <br/>
                       <button onClick = {toggleTheme} className = "text-white scale-150">
                       {theme ? <TbSunrise/> : <TbSunset/>}
        </button>
        </div>
      </div>
      </div>

      
    )
}