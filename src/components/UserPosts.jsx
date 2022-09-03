import React from 'react'
import postImg from '../assets/img/Small-Post.png'
import { FaClone, FaPlay } from 'react-icons/fa'

function UserPosts() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5'>
        <div className="posts-item relative">
            <FaClone className='absolute top-[15px] right-[15px] text-white text-2xl' />
            <img src={postImg} className="w-full" alt="user posts" />
        </div>
        <div className="posts-item relative">
            <FaPlay className='absolute top-[15px] right-[15px] text-white text-2xl' />
            <img src={postImg} className="w-full" alt="user posts" />
        </div>
        <div className="posts-item">
            <img src={postImg} className="w-full" alt="user posts" />
        </div>
        <div className="posts-item">
            <img src={postImg} className="w-full" alt="user posts" />
        </div>
        <div className="posts-item">
            <img src={postImg} className="w-full" alt="user posts" />
        </div>
        <div className="posts-item">
            <img src={postImg} className="w-full" alt="user posts" />
        </div>
    </div>
  )
}

export default UserPosts