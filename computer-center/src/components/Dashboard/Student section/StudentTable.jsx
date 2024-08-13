// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

// const StudentTable = ({ students = [] }) => {
//   const [objectUrls, setObjectUrls] = useState({});

//   useEffect(() => {
//     // Cleanup function to revoke object URLs
//     return () => {
//       Object.values(objectUrls).forEach(url => URL.revokeObjectURL(url));
//     };
//   }, [objectUrls]);

//   // Create object URLs for images
//   const getObjectUrl = (file) => {
//     if (file && file instanceof File) {
//       const url = URL.createObjectURL(file);
//       setObjectUrls(prevUrls => ({ ...prevUrls, [file.name]: url }));
//       return url;
//     }
//     return '';
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md mt-6">
//       <h2 className="text-xl font-semibold mb-4">Student List</h2>
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DOB</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">District</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Option</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mother's Name</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qualification</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact No</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guardian Contact</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aadhar No</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Religion</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marital Status</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Present Address</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Signature</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marksheet</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {students.length === 0 ? (
//             <tr>
//               <td colSpan="20" className="px-6 py-4 text-center text-sm text-gray-500">
//                 No students to display
//               </td>
//             </tr>
//           ) : (
//             students.map((student, index) => (
//               <tr key={index}>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.firstname || '-'}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.lastname || '-'}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.dob || '-'}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.district || '-'}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.course || '-'}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.courseOption || '-'}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.mothername || '-'}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.qualification || '-'}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.contactno || '-'}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.guardiancontact || '-'}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.adhar || '-'}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.gender || '-'}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.category || '-'}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.religion || '-'}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.maritalstatus || '-'}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.address || '-'}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.presentaddress || '-'}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {student.photo ? <img src={getObjectUrl(student.photo)} alt="Photo" className="w-16 h-16 object-cover"/> : '-'},
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {student.signature ? <img src={getObjectUrl(student.signature)} alt="Signature" className="w-16 h-16 object-cover"/> : '-'},
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {student.marksheet ? <img src={getObjectUrl(student.marksheet)} alt="Marksheet" className="w-16 h-16 object-cover"/> : '-'},
//                 </td>
//               </tr>
//             ))
//           }
//         </tbody>
//       </table>
//     </div>
//   );
// };

// // Prop types validation
// StudentTable.propTypes = {
//   students: PropTypes.arrayOf(PropTypes.shape({
//     firstname: PropTypes.string,
//     lastname: PropTypes.string,
//     dob: PropTypes.string,
//     district: PropTypes.string,
//     course: PropTypes.string,
//     courseOption: PropTypes.string,
//     mothername: PropTypes.string,
//     qualification: PropTypes.string,
//     contactno: PropTypes.string,
//     guardiancontact: PropTypes.string,
//     adhar: PropTypes.string,
//     gender: PropTypes.string,
//     category: PropTypes.string,
//     religion: PropTypes.string,
//     maritalstatus: PropTypes.string,
//     address: PropTypes.string,
//     presentaddress: PropTypes.string,
//     photo: PropTypes.instanceOf(File),
//     signature: PropTypes.instanceOf(File),
//     marksheet: PropTypes.instanceOf(File),
//   }))
// };

// export default StudentTable;
