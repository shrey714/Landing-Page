import React from 'react'
import Image from 'next/image'
function MainComponent() {
  return (
    <main className="min-h-[400px] flex flex-col sm:flex-row">
        <div className="bg-gray-300 min-h-full md:w-3/5 sm:w-1/2  ">
            hello
        </div>     
        <div className="bg-blue-300 min-h-full md:w-2/5 sm:w-1/2 hidden sm:block rounded-xl sm:relative sm:before:bg-gray-300 slant-div">
        <Image
          src={'/doctor.png'}
          fill={true} //this wont work
          alt="Picture of the author"
          className='z-1 rounded-xl'
        />
        </div>      
    </main>
  )
}

export default MainComponent
