import React from 'react'
import Image from 'next/image'

const Main = () => {
  return (
    <div className='h-full flex flex-col justify-center px-4 md:px-24'>
         <div className='flex flex-col z-10 md:pt-20'>
            <span className='text-gray-400 text-3xl pl-2'>
                Hi! I'M
            </span>
            <h1 className='flex flex-col text-4xl md:text-9xl boombox mt-5'>
                <span className='text-primary'>NIRANJAN</span>
                <span className='text-secondary mt-1'>SABARINATH</span>
            </h1>
            <h2 className='text-gray-400 text-3xl'>Web Developer</h2>
         </div>
         <div className='flex flex-col mt-12'>
          <h5 className='text-gray-400'>Connect with me</h5>
          <div className='flex gap-3 text-secondary mt-2'>
            <Image src={'/assets/socials/insta.svg'} width={25} height={25}/>
            <Image src={'/assets/socials/linkedin.svg'} width={25} height={25}/>
            <Image src={'/assets/socials/github.svg'} width={25} height={25}/>
            <Image src={'/assets/socials/mail.svg'} width={35} height={35}/>
          </div>
        </div>
        <div className='w-full bg-red-500 overflow-x-hidden'>
         <div className='h-3/4 md:h-full absolute top-10 -right-80 rotating-div overflow-hidden'>
            <Image width={600} height={600} style={{height:'100%',width:'auto'}} src={'/assets/bg/mandala.png'}/>
         </div>
        </div>
    </div>
  )
}

export default Main