import React from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/textgenerateffect'
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from 'react-icons/fa6';

const Hero = () => {
  return (
      <div className='pb-24 pt-32'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-24 h-screen' fill='white'/>
            <Spotlight className='-top-10 -left-full h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='-top-28 -left-80 h-[80vh] w-[50vw]' fill='blue'/>
        </div>
        
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.045] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" /> 
        </div>

        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <h2 className='uppercase tracking-widest text-xs text-cent text-blue-100 max-w-80'>
                    Dynamic Web Magic
                </h2>

                <TextGenerateEffect
                    className="text-center text-40 md:text-5xl lg:text-6xl"
                    words="Bettering business through user experience design."
                />

                <p className='text-center md:tracking-wider mb-4 text-small md:text-lg lg:text-2xl'>
                    Alex Arbogast
                </p>

                <a href='#about'>
                    <MagicButton 
                          title='Show my work' icon={<FaLocationArrow />} position={'right'} />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero