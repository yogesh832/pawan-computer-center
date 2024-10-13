import React from "react";

const MiniContact = ()=>{
    return (
        
      <div className="bg-indigo-100 mt-16 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-indigo-900 mb-6">
          For More Info, Please Contact Us
        </h2>
        
        <p className="text-lg text-gray-700 mb-8">
          Have any questions or inquiries? Feel free to get in touch with us for more details about our services and how we can assist you.
        </p>
        
        <div className="flex justify-center gap-4">
          {/* Email Info */}
          <div className="bg-white p-4 rounded-md shadow-lg flex items-center gap-3">
            <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <p className="text-sm font-medium text-gray-800">contact@pcc.com</p>
          </div>
          
          {/* Phone Info */}
          <div className="bg-white p-4 rounded-md shadow-lg flex items-center gap-3">
            <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4z" />
              <path d="M16.85 14.85a9.96 9.96 0 01-1.58-.73 1 1 0 00-.73-.15l-2.21.74c-1.01.34-2.07-.29-2.42-1.33l-.58-1.72a1 1 0 00-.94-.67H6.16c-1.22 0-2.36-.78-2.74-1.91a9.97 9.97 0 01-.18-5.03c.15-.83 1.04-1.33 1.87-.93l2.2.74a1 1 0 00.97-.26l1.11-1.11c.37-.37.55-.88.49-1.39-.03-.33-.05-.67-.05-1.01 0-1.66 1.34-3 3-3h2a2 2 0 012 2v2a9.98 9.98 0 01-5.14 8.56 2.99 2.99 0 00-.73.72z" />
            </svg>
            <p className="text-sm font-medium text-gray-800">+91 9999999999</p>
          </div>
        </div>

        {/* Contact Button */}
        <button className="mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg rounded-md shadow-lg transition-all duration-300">
          Contact Us
        </button>
      </div>
    </div>
    )
}

export default MiniContact;