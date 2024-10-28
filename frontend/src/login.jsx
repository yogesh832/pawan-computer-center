import React from 'react'

const login = () => {
  return (
    <div>
        <div className="flex text-center items-center justify-center min-h-screen bg-gray-100">
            <h1 className="w-20">Instagram</h1>
            <input type="text" value="" placeholder='Phone number, username or email'/>
            <input type="text" value="" placeholder='Password'/>
        </div>
    </div>
  )
}

export default login