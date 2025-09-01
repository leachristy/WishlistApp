import React from 'react'

export const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-center mt-32 mb-0">
        <p className=" text-6xl text-gray-800 font-semibold">
          Create and share lists
        </p>
        <p className=" text-xl text-gray-500 pt-5">
          Save and organize ideas to lists you can share
        </p>
        <button className=' bg-pink mt-5 text-off-white p-2 pr-4 pl-4 rounded-md font-bold hover:text-gray-200'>Get Started</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 justify-items-center m-10">
        <div className='md:w-64 m-5'>
          <img src='src/assets/christmas.jpg' className='mb-3' />
          <p>
            Christmas Wishlist
          </p>
        </div>
        <div className='md:w-64 m-5'>
          <img src='src/assets/birthday.jpg' className='mb-3' />
          <p>
            Birthday Wishlist
          </p>
        </div>
        <div className='md:w-64 m-5'>
          <img src='src/assets/game.jpg' className='mb-3' />
          <p>
            Games Wishlist
          </p>
        </div>
        <div className='md:w-64 m-5'>
          <img src='src/assets/home decor.jpg' className='mb-3' />
          <p>
            Home Decor Wishlist
          </p>
        </div>
        <div className='md:w-64 m-5'>
          <img src='src/assets/shopping.jpg' className='mb-3' />
          <p>
            Shopping Wishlist
          </p>
        </div>
        <div className='md:w-64 m-5'>
          <img src='src/assets/skincare.jpg' className='mb-3' />
          <p>
            Skincare Wishlist
          </p>
        </div>

      </div>
    </div>
  )
}
