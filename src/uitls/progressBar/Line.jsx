import React from 'react'

const Line = ({progress}) => {
  return (
    <div className="h-2 bg-gray-300 rounded-full">
        <div
          className="h-2 bg-black rounded-full"
          style={{ width: `${progress}%` }}
        />
      
      </div>
  )
}

export default Line

