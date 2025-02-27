import React from 'react'
import { assets } from '../../assets/assets'

export const Footer = () => {
  return (
    <footer className="flex md:flex-row flex-col-reverse
    item-center justify-between text-left w-full px-8 border-t">
      <div className='flex items-center gap-4'>
        <img className='hidden md:block w-20' src={assets.logo} alt="Logo" />
        <div className='hidden md:block h-7 w-px bg-gray-500/60'></div>
        <p className='py-4 text-center text-xs md:text-sm text-gray-500'>
          Copyright 2025 @ Something. All Right Reserved.
        </p>
      </div>
      <div className='flex items-center gap-3 max-mdmt-4'>
        <a href="#">
          <img src={assets.facebook_icon} alt="Facebook" />
        </a>
        <a href="#">
          <img src={assets.twitter_icon} alt="Twitter" />
        </a>
        <a href="#">
          <img src={assets.instagram_icon} alt="Instagram" />
        </a>
      </div>

    </footer>
  )
}
