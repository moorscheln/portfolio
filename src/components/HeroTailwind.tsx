import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter"

import Circles from './Circles';

import "tailwindcss/tailwind.css"

type Props = {}

export default function HeroTailwind({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Computer Engineering Student at the University of Alabama"],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <Circles></Circles>
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src="./headshot_small.png" alt=""></img>
        <div>
        <h2 className='text-lg uppercase text-gray-500 pb-2 tracking-[15px]'>Michael Orscheln</h2>
        <h1 className='text-xl lg:text-2xl font-semibold scroll-px-10 tex-ce'>
            <span className ="mr-3">{text}</span>
            <Cursor cursorColor="blue.800"></Cursor>
          </h1>
        </div>
    </div>

  )
}