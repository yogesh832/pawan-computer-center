// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// const EditStudent = () => {
//   const { registrationNumber } = useParams();
//   const [student, setStudent] = useState(null);
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     course: "",
//     courseOption: "",
//     adhar: "",
//     email: "",
//     phone: "",
//     address: "",
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get(`http://localhost:5000/dashboard/AddStudent/${registrationNumber}`)
//       .then((response) => {
//         setStudent(response.data);
//         setFormData({
//           firstname: response.data.firstname || "",
//           lastname: response.data.lastname || "",
//           course: response.data.course || "",
//           courseOption: response.data.courseOption || "",
//           adhar: response.data.adhar || "",
//           email: response.data.email || "",
//           phone: response.data.phone || "",
//           address: response.data.address || "",
//         });
//       })
//       .catch((error) => console.error("Error fetching student data:", error));
//   }, [registrationNumber]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .put(`http://localhost:5000/dashboard/AddStudent/${registrationNumber}`, formData)
//       .then(() => {
//         navigate("/dashboard/seeAllStudents");
//       })
//       .catch((error) => console.error("Error updating student data:", error));
//   };

//   const handleDelete = () => {
//     if (window.confirm("Are you sure you want to delete this student?")) {
//       axios
//         .delete(`http://localhost:5000/dashboard/AddStudent/${registrationNumber}`)
//         .then(() => {
//           navigate("/dashboard/seeAllStudents");
//         })
//         .catch((error) => console.error("Error deleting student:", error));
//     }
//   };

//   if (!student) return <p>Loading...</p>;

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Edit Student</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">First Name:</label>
//           <input
//             type="text"
//             name="firstname"
//             value={formData.firstname}
//             onChange={handleChange}
//             className="border border-gray-300 p-2 w-full"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Last Name:</label>
//           <input
//             type="text"
//             name="lastname"
//             value={formData.lastname}
//             onChange={handleChange}
//             className="border border-gray-300 p-2 w-full"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Course:</label>
//           <input
//             type="text"
//             name="course"
//             value={formData.course}
//             onChange={handleChange}
//             className="border border-gray-300 p-2 w-full"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Course Option:</label>
//           <input
//             type="text"
//             name="courseOption"
//             value={formData.courseOption}
//             onChange={handleChange}
//             className="border border-gray-300 p-2 w-full"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Aadhaar No:</label>
//           <input
//             type="text"
//             name="adhar"
//             value={formData.adhar}
//             onChange={handleChange}
//             className="border border-gray-300 p-2 w-full"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="border border-gray-300 p-2 w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Phone:</label>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="border border-gray-300 p-2 w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Address:</label>
//           <textarea
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             className="border border-gray-300 p-2 w-full"
//             rows="3"
//           />
//         </div>
//         <div className="flex gap-4">
//           <button
//             type="submit"
//             className="bg-blue-500 text-white py-2 px-4 rounded"
//           >
//             Save Changes
//           </button>
//           <button
//             type="button"
//             onClick={handleDelete}
//             className="bg-red-500 text-white py-2 px-4 rounded"
//           >
//             Delete
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditStudent;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const EditStudent = () => {
//   console.log("Registration Number:", registrationNumber);
//   const { registrationNumber } = useParams();

//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     dob: "",
//     state: "",
//     district: "",
//     course: "",
//     courseOption: "",
//     mothername: "",
//     qualification: "",
//     contactno: "",
//     guardiancontact: "",
//     adhar: "",
//     gender: "",
//     category: "",
//     religion: "",
//     maritalstatus: "",
//     address: "",
//     presentaddress: "",
//     photo: null,
//     signature: null,
//     marksheet: null,
//   });

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [selectedCourse, setSelectedCourse] = useState("");

//   const courseOptions = {
//     "": [],
//     8: [
//       "CERTIFICATE IN FUNDAMENTAL(RV01001)",
//       // Add other course options here...
//     ],
//     9: [
//       "Advanced Level Graphic Design(RV03039)",
//       "CERTIFICATE IN HINDI TYPING(RV03006)",
//       // Add other course options here...
//     ],
//     // Add other course levels...
//   };

//   const states = [
//     "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
//     "Goa", "Delhi", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
//     "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
//     "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
//     "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
//     "Uttarakhand", "West Bengal"
//   ];

//   const categories = ["General", "OBC", "SC", "ST", "EWS"];
//   const maritalStatuses = ["Single", "Married", "Divorced", "Widowed"];
//   const genders = ["Male", "Female", "Other"];

//   useEffect(() => {
//     const fetchStudentData = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(`http://localhost:5000/dashboard/AddStudent/${registrationNumber}`);
//         setFormData(response.data);
//         setSelectedCourse(response.data.course); // Set selected course for course options
//       } catch (error) {
//         setError("Error fetching student data.");
//         console.error("Error fetching student data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (registrationNumber) {
//       fetchStudentData();
//     }
//   }, [registrationNumber]);

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     if (type === "file") {
//       setFormData({ ...formData, [name]: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }

//     if (name === "course") {
//       setSelectedCourse(value);
//       setFormData({ ...formData, course: value, courseOption: "" });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const data = new FormData();
//       for (const key in formData) {
//         if (formData[key]) {
//           data.append(key, formData[key]);
//         }
//       }

//       await axios.put(`http://localhost:5000/dashboard/AddStudent/${registrationNumber}`, data);
//       setLoading(false);
//       // Optionally redirect or show a success message
//     } catch (error) {
//       setError("Error updating student data");
//       setLoading(false);
//       console.error("Error updating student data:", error);
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-semibold mb-4">Edit Student</h1>
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <form onSubmit={handleSubmit}>
//           <div className="flex flex-wrap">
//             {/* First Name */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First Name:</label>
//               <input
//                 type="text"
//                 id="firstname"
//                 name="firstname"
//                 value={formData.firstname}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                 required
//               />
//             </div>

//             {/* Last Name */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last Name:</label>
//               <input
//                 type="text"
//                 id="lastname"
//                 name="lastname"
//                 value={formData.lastname}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                 required
//               />
//             </div>

//             {/* Date of Birth */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth:</label>
//               <input
//                 type="date"
//                 id="dob"
//                 name="dob"
//                 value={formData.dob}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                 required
//               />
//             </div>

//             {/* State */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="state" className="block text-sm font-medium text-gray-700">State:</label>
//               <select
//                 id="state"
//                 name="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                 required
//               >
//                 <option value="">Select State</option>
//                 {states.map(state => (
//                   <option key={state} value={state}>{state}</option>
//                 ))}
//               </select>
//             </div>

//             {/* District */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="district" className="block text-sm font-medium text-gray-700">District:</label>
//               <input
//                 type="text"
//                 id="district"
//                 name="district"
//                 value={formData.district}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               />
//             </div>

//             {/* Course */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course:</label>
//               <select
//                 id="course"
//                 name="course"
//                 value={formData.course}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                 required
//               >
//                 <option value="">Select Course</option>
//                 <option value="8">1-Month Certificate Course</option>
//                 <option value="9">3-Months Certificate Course</option>
//                 {/* Add more course options */}
//               </select>
//             </div>

//             {/* Course Option */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="courseOption" className="block text-sm font-medium text-gray-700">Course Option:</label>
//               <select
//                 id="courseOption"
//                 name="courseOption"
//                 value={formData.courseOption}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                 required
//                 disabled={!selectedCourse}
//               >
//                 <option value="">Select Course Option</option>
//                 {courseOptions[selectedCourse]?.map(option => (
//                   <option key={option} value={option}>{option}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Mother Name */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="mothername" className="block text-sm font-medium text-gray-700">Mother Name:</label>
//               <input
//                 type="text"
//                 id="mothername"
//                 name="mothername"
//                 value={formData.mothername}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               />
//             </div>

//             {/* Qualification */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="qualification" className="block text-sm font-medium text-gray-700">Qualification:</label>
//               <input
//                 type="text"
//                 id="qualification"
//                 name="qualification"
//                 value={formData.qualification}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               />
//             </div>

//             {/* Contact Number */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="contactno" className="block text-sm font-medium text-gray-700">Contact Number:</label>
//               <input
//                 type="text"
//                 id="contactno"
//                 name="contactno"
//                 value={formData.contactno}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               />
//             </div>

//             {/* Guardian Contact */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="guardiancontact" className="block text-sm font-medium text-gray-700">Guardian Contact:</label>
//               <input
//                 type="text"
//                 id="guardiancontact"
//                 name="guardiancontact"
//                 value={formData.guardiancontact}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               />
//             </div>

//             {/* Aadhar */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="adhar" className="block text-sm font-medium text-gray-700">Aadhar:</label>
//               <input
//                 type="text"
//                 id="adhar"
//                 name="adhar"
//                 value={formData.adhar}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               />
//             </div>

//             {/* Gender */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender:</label>
//               <select
//                 id="gender"
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               >
//                 <option value="">Select Gender</option>
//                 {genders.map(gender => (
//                   <option key={gender} value={gender}>{gender}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Category */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
//               <input
//                 type="text"
//                 id="category"
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               />
//             </div>

//             {/* Religion */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="religion" className="block text-sm font-medium text-gray-700">Religion:</label>
//               <input
//                 type="text"
//                 id="religion"
//                 name="religion"
//                 value={formData.religion}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               />
//             </div>

//             {/* Marital Status */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="maritalstatus" className="block text-sm font-medium text-gray-700">Marital Status:</label>
//               <select
//                 id="maritalstatus"
//                 name="maritalstatus"
//                 value={formData.maritalstatus}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               >
//                 <option value="">Select Marital Status</option>
//                 {maritalStatuses.map(status => (
//                   <option key={status} value={status}>{status}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Address */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
//               <textarea
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                 rows="3"
//               />
//             </div>

//             {/* Present Address */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="presentaddress" className="block text-sm font-medium text-gray-700">Present Address:</label>
//               <textarea
//                 id="presentaddress"
//                 name="presentaddress"
//                 value={formData.presentaddress}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                 rows="3"
//               />
//             </div>

//             {/* Photo */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Photo:</label>
//               <input
//                 type="file"
//                 id="photo"
//                 name="photo"
//                 onChange={handleChange}
//                 className="mt-1 block w-full"
//               />
//               {formData.photo && <img src={URL.createObjectURL(formData.photo)} alt="Student Photo" className="mt-2 w-32 h-32 object-cover" />}
//             </div>

//             {/* Signature */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="signature" className="block text-sm font-medium text-gray-700">Signature:</label>
//               <input
//                 type="file"
//                 id="signature"
//                 name="signature"
//                 onChange={handleChange}
//                 className="mt-1 block w-full"
//               />
//               {formData.signature && <img src={URL.createObjectURL(formData.signature)} alt="Student Signature" className="mt-2 w-32 h-32 object-cover" />}
//             </div>

//             {/* Marksheet */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="marksheet" className="block text-sm font-medium text-gray-700">Marksheet:</label>
//               <input
//                 type="file"
//                 id="marksheet"
//                 name="marksheet"
//                 onChange={handleChange}
//                 className="mt-1 block w-full"
//               />
//               {formData.marksheet && <img src={URL.createObjectURL(formData.marksheet)} alt="Student Marksheet" className="mt-2 w-32 h-32 object-cover" />}
//             </div>

//             {/* Submit Button */}
//             <div className="w-full px-4 mb-4">
//               <button
//                 type="submit"
//                 className={`py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//                 disabled={loading}
//               >
//                 {loading ? "Updating..." : "Update Student"}
//               </button>
//               {error && <p className="text-red-500 mt-2">{error}</p>}
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditStudent;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom"; // Ensure useParams is imported

// const EditStudent = () => {
//   const { registrationNumber } = useParams(); // Move this to the top

//   console.log("Registration Number:", registrationNumber); // Move this to after the useParams call

//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     dob: "",
//     state: "",
//     district: "",
//     course: "",
//     courseOption: "",
//     mothername: "",
//     qualification: "",
//     contactno: "",
//     guardiancontact: "",
//     adhar: "",
//     gender: "",
//     category: "",
//     religion: "",
//     maritalstatus: "",
//     address: "",
//     presentaddress: "",
//     photo: null,
//     signature: null,
//     marksheet: null,
//   });

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [selectedCourse, setSelectedCourse] = useState("");

//   const courseOptions = {
//     "": [],
//     8: [
//       "CERTIFICATE IN FUNDAMENTAL(RV01001)",
//       // Add other course options here...
//     ],
//     9: [
//       "Advanced Level Graphic Design(RV03039)",
//       "CERTIFICATE IN HINDI TYPING(RV03006)",
//       // Add other course options here...
//     ],
//     // Add other course levels...
//   };

//   const states = [
//     "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
//     "Goa", "Delhi", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
//     "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
//     "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
//     "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
//     "Uttarakhand", "West Bengal"
//   ];

//   const categories = ["General", "OBC", "SC", "ST", "EWS"];
//   const maritalStatuses = ["Single", "Married", "Divorced", "Widowed"];
//   const genders = ["Male", "Female", "Other"];

//   useEffect(() => {
//     const fetchStudentData = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(`http://localhost:5000/dashboard/AddStudent/${registrationNumber}`);
//         setFormData(response.data);
//         setSelectedCourse(response.data.course); // Set selected course for course options
//       } catch (error) {
//         setError("Error fetching student data.");
//         console.error("Error fetching student data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (registrationNumber) {
//       fetchStudentData();
//     }
//   }, [registrationNumber]);

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     if (type === "file") {
//       setFormData({ ...formData, [name]: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }

//     if (name === "course") {
//       setSelectedCourse(value);
//       setFormData({ ...formData, course: value, courseOption: "" });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const data = new FormData();
//       for (const key in formData) {
//         if (formData[key]) {
//           data.append(key, formData[key]);
//         }
//       }

//       await axios.put(`http://localhost:5000/dashboard/AddStudent/${registrationNumber}`, data);
//       setLoading(false);
//       // Optionally redirect or show a success message
//     } catch (error) {
//       setError("Error updating student data");
//       setLoading(false);
//       console.error("Error updating student data:", error);
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-semibold mb-4">Edit Student</h1>
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <form onSubmit={handleSubmit}>
//           <div className="flex flex-wrap">
//             {/* First Name */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First Name:</label>
//               <input
//                 type="text"
//                 id="firstname"
//                 name="firstname"
//                 value={formData.firstname}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                 required
//               />
//             </div>

//             {/* Last Name */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last Name:</label>
//               <input
//                 type="text"
//                 id="lastname"
//                 name="lastname"
//                 value={formData.lastname}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                 required
//               />
//             </div>

//             {/* Date of Birth */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth:</label>
//               <input
//                 type="date"
//                 id="dob"
//                 name="dob"
//                 value={formData.dob}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                 required
//               />
//             </div>

//             {/* State */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="state" className="block text-sm font-medium text-gray-700">State:</label>
//               <select
//                 id="state"
//                 name="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                 required
//               >
//                 <option value="">Select State</option>
//                 {states.map(state => (
//                   <option key={state} value={state}>{state}</option>
//                 ))}
//               </select>
//             </div>

//             {/* District */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="district" className="block text-sm font-medium text-gray-700">District:</label>
//               <input
//                 type="text"
//                 id="district"
//                 name="district"
//                 value={formData.district}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               />
//             </div>

//             {/* Course */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course:</label>
//               <select
//                 id="course"
//                 name="course"
//                 value={formData.course}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                 required
//               >
//                 <option value="">Select Course</option>
//                 <option value="8">1-Month Certificate Course</option>
//                 <option value="9">3-Months Certificate Course</option>
//                 {/* Add more course options */}
//               </select>
//             </div>

//             {/* Course Option */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="courseOption" className="block text-sm font-medium text-gray-700">Course Option:</label>
//               <select
//                 id="courseOption"
//                 name="courseOption"
//                 value={formData.courseOption}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                 required
//                 disabled={!selectedCourse}
//               >
//                 <option value="">Select Course Option</option>
//                 {courseOptions[selectedCourse]?.map(option => (
//                   <option key={option} value={option}>{option}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Mother's Name */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="mothername" className="block text-sm font-medium text-gray-700">Mother's Name:</label>
//               <input
//                 type="text"
//                 id="mothername"
//                 name="mothername"
//                 value={formData.mothername}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               />
//             </div>

//             {/* Qualification */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="qualification" className="block text-sm font-medium text-gray-700">Qualification:</label>
//               <input
//                 type="text"
//                 id="qualification"
//                 name="qualification"
//                 value={formData.qualification}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               />
//             </div>

//             {/* Contact No */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="contactno" className="block text-sm font-medium text-gray-700">Contact No:</label>
//               <input
//                 type="text"
//                 id="contactno"
//                 name="contactno"
//                 value={formData.contactno}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               />
//             </div>

//             {/* Guardian Contact */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="guardiancontact" className="block text-sm font-medium text-gray-700">Guardian Contact:</label>
//               <input
//                 type="text"
//                 id="guardiancontact"
//                 name="guardiancontact"
//                 value={formData.guardiancontact}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               />
//             </div>

//             {/* Aadhar */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="adhar" className="block text-sm font-medium text-gray-700">Aadhar:</label>
//               <input
//                 type="text"
//                 id="adhar"
//                 name="adhar"
//                 value={formData.adhar}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               />
//             </div>

//             {/* Gender */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender:</label>
//               <select
//                 id="gender"
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               >
//                 <option value="">Select Gender</option>
//                 {genders.map(gender => (
//                   <option key={gender} value={gender}>{gender}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Category */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
//               <select
//                 id="category"
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               >
//                 <option value="">Select Category</option>
//                 {categories.map(category => (
//                   <option key={category} value={category}>{category}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Religion */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="religion" className="block text-sm font-medium text-gray-700">Religion:</label>
//               <input
//                 type="text"
//                 id="religion"
//                 name="religion"
//                 value={formData.religion}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               />
//             </div>

//             {/* Marital Status */}
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="maritalstatus" className="block text-sm font-medium text-gray-700">Marital Status:</label>
//               <select
//                 id="maritalstatus"
//                 name="maritalstatus"
//                 value={formData.maritalstatus}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               >
//                 <option value="">Select Marital Status</option>
//                 {maritalStatuses.map(status => (
//                   <option key={status} value={status}>{status}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Address */}
//             <div className="w-full px-4 mb-4">
//               <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
//               <textarea
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                 rows="3"
//               />
//             </div>

//             {/* Present Address */}
//             <div className="w-full px-4 mb-4">
//               <label htmlFor="presentaddress" className="block text-sm font-medium text-gray-700">Present Address:</label>
//               <textarea
//                 id="presentaddress"
//                 name="presentaddress"
//                 value={formData.presentaddress}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                 rows="3"
//               />
//             </div>

//             {/* Photo Upload */}
//             <div className="w-full px-4 mb-4">
//               <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Photo:</label>
//               <input
//                 type="file"
//                 id="photo"
//                 name="photo"
//                 accept="image/*"
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               />
//               {formData.photo && (
//                 <img
//                   src={URL.createObjectURL(formData.photo)}
//                   alt="Preview"
//                   className="mt-2 w-32 h-32 object-cover"
//                 />
//               )}
//             </div>

//             {/* Signature Upload */}
//             <div className="w-full px-4 mb-4">
//               <label htmlFor="signature" className="block text-sm font-medium text-gray-700">Signature:</label>
//               <input
//                 type="file"
//                 id="signature"
//                 name="signature"
//                 accept="image/*"
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               />
//               {formData.signature && (
//                 <img
//                   src={URL.createObjectURL(formData.signature)}
//                   alt="Preview"
//                   className="mt-2 w-32 h-32 object-cover"
//                 />
//               )}
//             </div>

//             {/* Marksheet Upload */}
//             <div className="w-full px-4 mb-4">
//               <label htmlFor="marksheet" className="block text-sm font-medium text-gray-700">Marksheet:</label>
//               <input
//                 type="file"
//                 id="marksheet"
//                 name="marksheet"
//                 accept="application/pdf,image/*"
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               />
//             </div>

//             {/* Submit Button */}
//             <div className="w-full px-4 mb-4">
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
//               >
//                 Update Student
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditStudent;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditStudent = () => {
  const { registrationNumber } = useParams();

  console.log("Registration Number:", registrationNumber);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    state: "",
    district: "",
    course: "",
    courseOption: "",
    mothername: "",
    qualification: "",
    contactno: "",
    guardiancontact: "",
    adhar: "",
    gender: "",
    category: "",
    religion: "",
    maritalstatus: "",
    address: "",
    presentaddress: "",
    photo: null,
    signature: null,
    marksheet: null,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const courseOptions = {
    "": [],
    8: [
      "CERTIFICATE IN FUNDAMENTAL(RV01001)",
      // Add other course options here...
    ],
    9: [
      "Advanced Level Graphic Design(RV03039)",
      "CERTIFICATE IN HINDI TYPING(RV03006)",
      // Add other course options here...
    ],
    // Add other course levels...
  };

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Delhi",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const categories = ["General", "OBC", "SC", "ST", "EWS"];
  const maritalStatuses = ["Single", "Married", "Divorced", "Widowed"];
  const genders = ["Male", "Female", "Other"];

  useEffect(() => {
    const fetchStudentData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5000/dashboard/AddStudent/${registrationNumber}`
        );
        setFormData(response.data);
        setSelectedCourse(response.data.course);
      } catch (error) {
        setError("Error fetching student data.");
        console.error("Error fetching student data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (registrationNumber) {
      fetchStudentData();
    }
  }, [registrationNumber]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (name === "course") {
      setSelectedCourse(value);
      setFormData({ ...formData, course: value, courseOption: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      for (const key in formData) {
        if (formData[key]) {
          data.append(key, formData[key]);
        }
      }

      await axios.put(
        `http://localhost:5000/dashboard/AddStudent/${registrationNumber}`,
        data
      );
      setLoading(false);
      // Optionally redirect or show a success message
    } catch (error) {
      setError("Error updating student data");
      setLoading(false);
      console.error("Error updating student data:", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Edit Student</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap">
            {/* First Name */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700"
              >
                First Name:
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>

            {/* Last Name */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name:
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>

            {/* Date of Birth */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth:
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>

            {/* State */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State:
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            {/* District */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="district"
                className="block text-sm font-medium text-gray-700"
              >
                District:
              </label>
              <input
                type="text"
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            {/* Course */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="course"
                className="block text-sm font-medium text-gray-700"
              >
                Course:
              </label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              >
                <option value="">Select Course</option>
                <option value="8">1-Month Certificate Course</option>
                <option value="9">3-Months Certificate Course</option>
                {/* Add more course options */}
              </select>
            </div>

            {/* Course Option */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="courseOption"
                className="block text-sm font-medium text-gray-700"
              >
                Course Option:
              </label>
              <select
                id="courseOption"
                name="courseOption"
                value={formData.courseOption}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
                disabled={!selectedCourse}
              >
                <option value="">Select Course Option</option>
                {courseOptions[selectedCourse]?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Mother Name */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="mothername"
                className="block text-sm font-medium text-gray-700"
              >
                Mother Name:
              </label>
              <input
                type="text"
                id="mothername"
                name="mothername"
                value={formData.mothername}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            {/* Qualification */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="qualification"
                className="block text-sm font-medium text-gray-700"
              >
                Qualification:
              </label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            {/* Contact No */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="contactno"
                className="block text-sm font-medium text-gray-700"
              >
                Contact No:
              </label>
              <input
                type="text"
                id="contactno"
                name="contactno"
                value={formData.contactno}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>

            {/* Guardian Contact */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="guardiancontact"
                className="block text-sm font-medium text-gray-700"
              >
                Guardian Contact:
              </label>
              <input
                type="text"
                id="guardiancontact"
                name="guardiancontact"
                value={formData.guardiancontact}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            {/* Aadhar */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="adhar"
                className="block text-sm font-medium text-gray-700"
              >
                Aadhar:
              </label>
              <input
                type="text"
                id="adhar"
                name="adhar"
                value={formData.adhar}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            {/* Gender */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender:
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option value="">Select Gender</option>
                {genders.map((gender) => (
                  <option key={gender} value={gender}>
                    {gender}
                  </option>
                ))}
              </select>
            </div>

            {/* Category */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category:
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Religion */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="religion"
                className="block text-sm font-medium text-gray-700"
              >
                Religion:
              </label>
              <input
                type="text"
                id="religion"
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            {/* Marital Status */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="maritalstatus"
                className="block text-sm font-medium text-gray-700"
              >
                Marital Status:
              </label>
              <select
                id="maritalstatus"
                name="maritalstatus"
                value={formData.maritalstatus}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option value="">Select Marital Status</option>
                {maritalStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            {/* Address */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address:
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            {/* Present Address */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="presentaddress"
                className="block text-sm font-medium text-gray-700"
              >
                Present Address:
              </label>
              <textarea
                id="presentaddress"
                name="presentaddress"
                value={formData.presentaddress}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            {/* Photo */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700"
              >
                Photo:
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                onChange={handleChange}
                className="mt-1 block w-full"
              />
              {formData.photo && (
                <img
                  src={
                    formData.photo instanceof File
                      ? URL.createObjectURL(formData.photo)
                      : null
                  }
                  alt="Preview"
                  className="mt-2 w-32 h-32 object-cover"
                />
              )}
            </div>

            {/* Signature */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="signature"
                className="block text-sm font-medium text-gray-700"
              >
                Signature:
              </label>
              <input
                type="file"
                id="signature"
                name="signature"
                onChange={handleChange}
                className="mt-1 block w-full"
              />
              {formData.signature && (
                <img
                  src={
                    formData.signature instanceof File
                      ? URL.createObjectURL(formData.signature)
                      : null
                  }
                  alt="Preview"
                  className="mt-2 w-32 h-32 object-cover"
                />
              )}
            </div>

            {/* Marksheet */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="marksheet"
                className="block text-sm font-medium text-gray-700"
              >
                Marksheet:
              </label>
              <input
                type="file"
                id="marksheet"
                name="marksheet"
                onChange={handleChange}
                className="mt-1 block w-full"
              />
            </div>

            {/* Submit Button */}
            <div className="w-full px-4 mb-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStudent;
