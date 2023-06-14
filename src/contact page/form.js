import React from 'react';
import { useState } from 'react';
import './styling.css';
import {CiPaperplane} from 'react-icons/ci';
import {HiOutlineCursorClick} from 'react-icons/hi';
export default function Form() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(true);
    };
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent form submission
  
      // Perform your form handling logic here
      // ...
  
      // Optional: Show a success message or perform any desired actions
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 2000);
    };
  
  
    // if (submitted) {
    //   return (
    //     <>
    //       <div className="text-2xl">Thank you!</div>
    //       <div className="text-md">We'll be in touch soon.</div>
    //     </>
    //   );
    // }

    return (
        <div>
 {isExpanded ? <div class="fixed top-0 mt-[2%] w-[60%] left-1/2 transform -translate-x-1/2 translate-y-20 z-3 opacity-100 transition-opacity duration-500 ">
  <div className = "text-3xl mt-[7%] pb-[1%] flex flex-wrap justify-left text-white ">Contact Me!</div>
        <form
    //   action={FORM_ENDPOINT}
       onSubmit={handleSubmit}
    //   method="POST"
    >
        <div className = "flex flex-wrap justify-center mt-[3%]">
      <div className="mb-3 pt-0 w-[50%] pr-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-300 relative bg-black bg-opacity-50 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0 w-[50%] pl-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-300 bg-black bg-opacity-50 relative rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0 w-full h-[40%]">
        <textarea
          placeholder="Your message"
          name="message"
          rows="8"
          className="px-3 py-3 placeholder-gray-400 text-gray-300 bg-black bg-opacity-50 relative rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      </div>
      <div className={`mb-3 pt-0 ${isClicked ? 'opacity-0 translate-y-10' : ''}`}>
      <button
        className="text-white  font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
             >
        <CiPaperplane size={30} />
      </button>
      {isClicked && <div className="text-2xl text-white">Thank you!</div>}
    </div>
    </form>
</div>: <div className = "flex flex-wrap justify-center mt-[25%] text-white animate-[ping_2s_ease-in-out_infinite]"><HiOutlineCursorClick className = "scale-150"/> </div> }
<div className={`drawing`}>
  <div
      className={`drawing__overlay ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={handleMouseEnter}
    > </div>
  <div>
 
    <span class="drawing__mountain"></span>
    <span class="drawing__mountain"></span>
  </div>

  <div>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
    <span class="drawing__star"></span>
  </div>

  <span class="drawing__shooter"></span>
</div>

        </div>
    );
    }
    