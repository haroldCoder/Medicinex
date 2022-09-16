import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import $ from 'jquery';
import 'flowbite/dist/flowbite.js';
import { Dropdown } from 'flowbite-react';
import { Navbar } from 'flowbite-react';
import {AiOutlineMenu} from 'react-icons/ai'

function App() {
  function Update(){
    $(".submenu").slideToggle(500);
  }
  return (
    <main>
      <nav className='flex py-8 px-4'>
        <div className='menu'>
          <button className='btn bg-blue-500 rounded-sm p-6' onClick={Update}><AiOutlineMenu className='bg-white text-lg'/></button>
          <div className='submenu h-100 bg-gray-700 grid grid-cols-1' style={{width: "100%", display: "none"}}>
            <div className='border-2 p-2 border-white h-14'><h2 className='text-white text-lg'>Medicines</h2></div>
            <div className='border-2 p-2 border-white h-14'><h2 className='text-white text-lg'>Discounts</h2></div>
            <div className='border-2 p-2 border-white h-14'><h2 className='text-white text-lg'>About</h2></div>
            <div className='border-2 p-2 border-white h-14'><h2 className='text-white text-lg'>Help</h2></div>
          </div>
        </div>
        <h2 className='text-lime-400 text-5xl sticky' style={{fontFamily: "fantasy", left: "40%"}}>Medicinex</h2>
      </nav>
    </main>
  )
}

export default App
