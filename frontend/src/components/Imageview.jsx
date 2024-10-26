import React, { useEffect, useState } from "react";
import axios from "axios";

function Imageview() {
  const [students, setStudents] = useState([]); // Store all student data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/dashboard/AddStudent"
        );
        if (Array.isArray(response.data)) {
          setStudents(response.data);
        } else {
          setError("Unexpected data format");
        }
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Image Viewer</h1>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {students.length > 0
          ? students.map((student) => (
              <div key={student._id} className="flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-4">
                  {student.registrationId}
                </h3>
                {student.photo ? (
                  <img
                    src={`${student.photo}`}
                    alt={`Photo of ${student.registrationId}`}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                ) : (
                  <p className="text-gray-500">No photo available</p>
                )}
              </div>
            ))
          : !loading && <p className="text-center">No photos available</p>}
      </div>
    </div>
  );
}

export default Imageview;
