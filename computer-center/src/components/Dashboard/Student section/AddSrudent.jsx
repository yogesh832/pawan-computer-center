import React, { useState, useEffect } from "react";
import StudentTable from "./StudentTable";

const AddStudent = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    fathername: "",
    mothername: "",
    dob: "",
    nationality: "",
    qualification: "",
    contactno: "",
    guardiancontact: "",
    adhar: "",
    gender: "",
    category: "",
    religion: "",
    maritalstatus: "",
    photo: null,
    signature: null,
    marksheet: null,
    address: "",
    presentaddress: ""
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingIndex !== null) {
      setFormData(students[editingIndex]);
    } else {
      setFormData({
        name: "",
        fathername: "",
        mothername: "",
        dob: "",
        nationality: "",
        qualification: "",
        contactno: "",
        guardiancontact: "",
        adhar: "",
        gender: "",
        category: "",
        religion: "",
        maritalstatus: "",
        photo: null,
        signature: null,
        marksheet: null,
        address: "",
        presentaddress: ""
      });
    }
  }, [editingIndex, students]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.fathername) {
      setError("Name and Father's Name are required.");
      return;
    }

    const newStudent = { ...formData };
    console.log("Submitted Data:", newStudent); // Log the submitted data to the console

    if (editingIndex !== null) {
      const updatedStudents = [...students];
      updatedStudents[editingIndex] = newStudent;
      setStudents(updatedStudents);
      setEditingIndex(null);
    } else {
      setStudents([...students, newStudent]);
    }

    setFormData({
      name: "",
      fathername: "",
      mothername: "",
      dob: "",
      nationality: "",
      qualification: "",
      contactno: "",
      guardiancontact: "",
      adhar: "",
      gender: "",
      category: "",
      religion: "",
      maritalstatus: "",
      photo: null,
      signature: null,
      marksheet: null,
      address: "",
      presentaddress: ""
    });
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  return (
    <div className="w-screen h-screen p-6 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {editingIndex !== null ? "Update Student Data" : "Add Student Data"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="fathername"
              value={formData.fathername}
              onChange={handleChange}
              placeholder="Father's Name"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="mothername"
              value={formData.mothername}
              onChange={handleChange}
              placeholder="Mother's Name"
              className="p-2 border rounded"
            />
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              placeholder="Nationality"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              placeholder="Qualification"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="contactno"
              value={formData.contactno}
              onChange={handleChange}
              placeholder="Contact Number"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="guardiancontact"
              value={formData.guardiancontact}
              onChange={handleChange}
              placeholder="Guardian Contact"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="adhar"
              value={formData.adhar}
              onChange={handleChange}
              placeholder="Aadhar Number"
              className="p-2 border rounded"
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="p-2 border rounded"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Category"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              placeholder="Religion"
              className="p-2 border rounded"
            />
            <select
              name="maritalstatus"
              value={formData.maritalstatus}
              onChange={handleChange}
              className="p-2 border rounded"
            >
              <option value="">Select Marital Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
            </select>
            <input
              type="file"
              name="photo"
              onChange={handleFileChange}
              className="p-2 border rounded"
            />
            <input
              type="file"
              name="signature"
              onChange={handleFileChange}
              className="p-2 border rounded"
            />
            <input
              type="file"
              name="marksheet"
              onChange={handleFileChange}
              className="p-2 border rounded"
            />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Permanent Address"
              className="p-2 border rounded"
            />
            <textarea
              name="presentaddress"
              value={formData.presentaddress}
              onChange={handleChange}
              placeholder="Present Address"
              className="p-2 border rounded"
            />
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm mt-4"
          >
            {editingIndex !== null ? "Update Data" : "Add Student"}
          </button>
        </form>
      </div>
      <StudentTable students={students} onEdit={handleEdit} />
    </div>
  );
};

export default AddStudent;
