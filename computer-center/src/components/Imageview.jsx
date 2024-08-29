import React, { useEffect, useState } from "react";
import axios from "axios";

function Imageview() {
  const [studentData, setStudentData] = useState({}); // Store all student data

  useEffect(() => {
    axios.get("http://localhost:5000/dashboard/AddStudent/PCC000006")
      .then(response => {
        console.log(response.data); // Check the response structure
        setStudentData(response.data); 
      })
      .catch(error => {
        console.error("Error fetching student data:", error);
      });
  }, []);

  return (
    <>
      <h1>Image Testing</h1>
      <div>
        <h3>Photo</h3>
        {/* Only render the image if 'studentData.photo' exists */}
        {studentData.photo ? (
          <img src={`http://localhost:5000${studentData.photo}`} alt="Photo" />
        ) : (
          <p>No photo available</p>
        )}
      </div>

      <div>
        <h3>Signature</h3>
        {/* Only render the image if 'studentData.signature' exists */}
        {studentData.signature ? (
          <img src={`http://localhost:5000${studentData.signature}`} alt="Signature" />
        ) : (
          <p>No signature available</p>
        )}
      </div>

      <div>
        <h3>Marksheet</h3>
        {/* Only render the image if 'studentData.marksheet' exists */}
        {studentData.marksheet ? (
          <img src={`http://localhost:5000${studentData.marksheet}`} alt="Marksheet" />
        ) : (
          <p>No marksheet available</p>
        )}
      </div>
    </>
  );
}

export default Imageview;
