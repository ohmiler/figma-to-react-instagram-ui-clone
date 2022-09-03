import React from 'react'
import { FaBuromobelexperte, FaMapMarkedAlt, FaPlay, FaPlayCircle, FaUserTag } from 'react-icons/fa'

function Toggle() {
  return (
    <div>
        <div className='border-t relative top-[20px]'></div>
        <ul className='flex flex-wrap justify-center my-[20px]'>
            <li className='mx-[30px] border-t border-black pt-[15px]'>
                <a href="#" className='flex items-center'><FaBuromobelexperte className='mr-[5px]'/> POSTS</a>
            </li>
            <li className='mx-[30px] pt-[15px]'>
                <a href="#" className='flex items-center'><FaMapMarkedAlt className='mr-[5px]'/> GUIDES</a>
            </li>
            <li className='mx-[30px] pt-[15px]'>
                <a href="#" className='flex items-center'><FaPlay className='mr-[5px]'/> REELS</a>
            </li>
            <li className='mx-[30px] pt-[15px]'>
                <a href="#" className='flex items-center'><FaPlayCircle className='mr-[5px]'/> VIDEOS</a>
            </li>
            <li className='mx-[30px] pt-[15px]'>
                <a href="#" className='flex items-center'><FaUserTag className='mr-[5px]'/> TAGGED</a>
            </li>
        </ul>
    </div>
  )
}

export default Toggle