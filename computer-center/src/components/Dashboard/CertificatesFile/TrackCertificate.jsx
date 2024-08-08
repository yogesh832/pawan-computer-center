import {React, useState} from "react";

const TrackCertificate = () =>{
    const [studentID, setStudentID] = useState('');
  const [requests, setRequests] = useState([
    { id: 2, studentId: 'RVSP2407105428', name: 'SANTOSH SINGH', date: '06-07-2024' },
    { id: -1, studentId: 'RVSP2406105424', name: 'RAJEEV KUMAR', date: '30-06-2024' },
  ]);

  const handleStudentIDChange = (event) => {
    setStudentID(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (studentID) {
      const newRequest = {
        id: Date.now(), 
        studentId,
        name: 'Unknown', 
        date: new Date().toLocaleDateString('en-CA'),
      };
      setRequests([...requests, newRequest]);
      setStudentID('');
    }
  };

    return(
        <>
        <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 ">Certificate Tracking</h1>
      <div className="bg-white p-4 rounded-md mb-4">
        <h2 className="text-xl font-bold text-black ">Track Certificate (View)
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="studentId" className="block text-black text-sm font-bold mb-2">
              Student ID *
            </label>
            <input
              type="text"
              id="studentId"
              value={studentID}
              onChange={handleStudentIDChange}
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

      <div className="bg-white p-4 rounded-md">
        <h2 className="text-xl font-bold text-black">Tracking Result</h2>
        </div>
      </div>
        </>
    )
}

export default TrackCertificate