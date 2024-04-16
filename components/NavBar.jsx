'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='h-max flex items-center justify-between px-3 md:px-16 py-5 md:py-8'>
        <Image src={'/assets/logo.svg'} width={50} height={50}/>
        <div className='hidden md:flex gap-16 boombox text-white pr-20 z-50'>
            <Link href={'#'}>HOME</Link>
            <Link href={'#'}>ABOUT</Link>
            <Link href={'#'}>PROJECTS</Link>
            <Link href={'#'}>CONTACT</Link>
        </div>
    </div>
  )
}

export default NavBar