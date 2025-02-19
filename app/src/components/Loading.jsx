import React from 'react'
import {LineWave} from "react-loader-spinner"

const Loading = () => {
  return (
    <div className='absolute top-0 left-0 h-screen w-screen flex justify-center items-center text-2xl'>
      <LineWave />
    </div>
  )
}

export default Loading
