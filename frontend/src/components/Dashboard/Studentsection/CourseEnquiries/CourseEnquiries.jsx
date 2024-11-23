import React, { useEffect, useState } from "react";
import axios from "axios";

const CourseEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]); // State to store contact forms
  const [error, setError] = useState(""); // State to store error messages

  // Fetch contact forms
  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await axios.get("http://localhost:5000/contact-forms"); // Replace with your backend URL
        setEnquiries(response.data);
      } catch (err) {
        console.error("Error fetching contact forms:", err);
        setError("Failed to load contact enquiries.");
      }
    };

    fetchEnquiries();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Course Enquiries</h1>
      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
      {enquiries.length > 0 ? (
        <ul className="space-y-4">
          {enquiries.map((form) => (
            <li
              key={form._id}
              className="relative p-4 border rounded-lg shadow-md  bg-white"
            >
              <p className="mb-2">
                <strong>Name:</strong> {form.name}
              </p>
              <p className="mb-2">
                <strong>Email:</strong> {form.email}
              </p>
              <p className="mb-4">
                <strong>Message:</strong> {form.message}
              </p>
              <p className="absolute right-4 bottom-4 text-sm text-green-500">
                Sent At: {new Date(form.sentAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No enquiries found.</p>
      )}
    </div>
  );
};

export default CourseEnquiries;
