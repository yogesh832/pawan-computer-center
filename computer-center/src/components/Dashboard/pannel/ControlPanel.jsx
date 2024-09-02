import React from 'react';

const ProfileHeader = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
    <div className="bg-purple-100 p-6 flex items-center justify-between rounded">
      <div className="flex items-center">
        <img 
          src="https://via.placeholder.com/100" 
          alt="Charles Deo" 
          className="rounded-full w-24 h-24" 
        />
        <div className="ml-4">
          <h1 className="text-2xl font-bold">Charles Deo</h1>
          <p className="text-sm text-gray-500">UI/UX Designer</p>
        </div>
      </div>
      <div className="flex">
        <button className="bg-purple-500 text-white px-4 py-2 rounded mr-2">Follow</button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded">Schedule a meeting</button>
      </div>
    </div>
    <div className="flex mt-4">
      <div className="w-1/4">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-lg font-bold mb-4">About</h2>
          <p><strong>Gender:</strong> Male</p>
          <p><strong>Born:</strong> June 26, 1980</p>
          <p><strong>Address:</strong> 2239 Hug Camp Road, Schaumburg</p>
          <p><strong>Email:</strong> charles1532@umnoth.com</p>
          <p><strong>Phone:</strong> 337-700-6547</p>
        </div>
      </div>
      <div className="w-1/2 mx-4">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-lg font-bold mb-4">Posts</h2>
          <div className="mb-4">
            <img 
              src="https://via.placeholder.com/400x200" 
              alt="Post" 
              className="rounded" 
            />
            <p className="mt-2">Charles Deo: New Blazer out here... $500!!!</p>
          </div>
        </div>
      </div>
      <div className="w-1/4">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-lg font-bold mb-4">You might know</h2>
          <ul>
            <li>Eddie Laczynski</li>
            <li>Alejey Sosa</li>
            <li>Anthony Wolf</li>
          </ul>
          <h2 className="text-lg font-bold mt-6 mb-4">Active</h2>
          <ul>
            <li>Shelby Goode</li>
            <li>Robert Bicins</li>
            <li>John Carlio</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProfileHeader;
