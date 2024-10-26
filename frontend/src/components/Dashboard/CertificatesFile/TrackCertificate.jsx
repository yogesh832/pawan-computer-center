import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TrackCertificate = () => {
  const [registrationNo, setRegistrationNo] = useState('');
  const navigate = useNavigate();

  const handleRegistrationNoChange = (event) => {
    setRegistrationNo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (registrationNo) {
      navigate(`/certificate/${registrationNo}`); // Redirect to the Certificate page
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Certificate Tracking</h1>
      <div className="bg-white p-4 rounded-md mb-4">
        <h2 className="text-xl font-bold text-black">Track Certificate (View)</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="registrationNo" className="block text-black text-sm font-bold mb-2">
              Registration No *
            </label>
            <input
              type="text"
              id="registrationNo"
              value={registrationNo}
              onChange={handleRegistrationNoChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrackCertificate;
