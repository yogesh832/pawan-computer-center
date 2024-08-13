import React, { useState } from 'react';
import StudentTable from './StudentTable';

const AddStudent = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    dob: '',
    district: '',
    course: '',
    courseOption: '',
    mothername: '',
    qualification: '',
    contactno: '',
    guardiancontact: '',
    adhar: '',
    gender: '',
    category: '',
    religion: '',
    maritalstatus: '',
    address: '',
    presentaddress: '',
    photo: null,
    signature: null,
    marksheet: null,
  });

  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const courseOptions = {
    '': [],
    '8': ['   CERTIFICATE IN FUNDAMENTAL(RV01001)', 'CERTIFICATE IN MS EXCEL(RV01003)', 'CERTIFICATE IN MS POWER POINT(RV01004)',' CERTIFICATE IN MS WORD(RV01002)',], // 1 MONTH COURSES
    '9': ['     Advanced Level Graphic Design(RV03039)',' Advanced Level Video Production(RV03040)','CERTIFICATE IN ADOBE IN-DESIGN(RV03023)','CERTIFICATE IN ADOBE PREMIER(RV03012)','CERTIFICATE IN AJAX(RV03026)','CERTIFICATE IN ASP.NET, ADO.NET(RV03019)',`CERTIFICATE IN AUTOCAD [2D & 3D](RV03032)`,'CERTIFICATE IN C(RV03018)','CERTIFICATE IN C ++(RV03020)','  CERTIFICATE IN COMPUTER BASIC(RV03003)','CERTIFICATE IN CORE JAVA(RV03033)','   CERTIFICATE IN COREL DRAW(RV03011)','CERTIFICATE IN DOTNET PROGRAMMING(RV03038)','CERTIFICATE IN DREAMWEAVER(RV03017)','CERTIFICATE IN ENGLISH &amp; REGIONAL LANGUAGE $ TYPING(RV03036)','CERTIFICATE IN EXCEL(RV03041)',' CERTIFICATE IN HINDI TYPING(RV03006)','CERTIFICATE IN HTML(RV03027)',' CERTIFICATE IN ILLUSTRATOR(RV03024)',' CERTIFICATE IN SERVLET, JSP, JDBC(RV03029)','CERTIFICATE IN SOUND FORGE(RV03015)',' CERTIFICATE IN SPOKEN ENGLISH(RV03004)CERTIFICATE IN VISUAL BASIC(RV03028)','CERTIFICATE COURSE IN REVIT ARCHITECTURE(RVV03008)',' CERTIFICATE IN 3D STUDIO MAX(RV03013)','   CERTIFICATE IN AFTER EFFECTS(RV03014)','DIPLOMA IN COMPUTER APPLICATION(RV03001)',], // 3 MONTHS COURSES
    '14': ['DIPLOMA IN MOBILE REPAIRING &amp; SOFTWARE INSTALLATION(RVV06021)','CERTIFICATE IN COMPUTER BASIC AND TALLY(RV06016) CERTIFICATE IN ENGLISH AND HINDI TYPING(RV06018)  DIPLOMA IN BASIC MULTIMEDIA(RV06011)',' DIPLOMA IN COMPUTER APPLICATION ACCOUNTING(RV06009)',' DIPLOMA IN COMPUTER PROGRAMMING(RV06007)',' DIPLOMA IN DESK TOP PUBLISHING(RV06003)','  CERTIFICATE IN COMPUTER APPLICATION(RV06017)',' CERTIFICATE IN DECORATIVE PAINTINGS(RVV06045)','  Certificate in Digital Marketing(RV06020)','  CERTIFICATE IN GRAPHIC DESIGNING(RV06014)',' TO WEAR WITH ANGELA WOLF (RVV06006) DIPLOMA IN WEB TECHNOLOGY(RV06006)','',], // 6 MONTHS COURSES


    '15': ['','','','','','','','','','','','',], // 12 MONTHS COURSES



    '12': [' ADVANCE DIPLOMA IN COMPUTER APPLICATION(RV18001)',' Master Diploma in Computer information(EV18002)',], // 18 MONTHS COURSES
    '13': ['Advance Diploma in Barbering(RVV24004)',' ADVANCE DIPLOMA IN COMPUTER HARDWARE &amp; NETWORKING ENGINEERING(RV24003)','ADVANCE DIPLOMA IN FINANCIAL ACCOUNTING(RV24006)',' ADVANCE DIPLOMA IN INFORMATION TECHNOLOGY(RV24004)','ADVANCE DIPLOMA IN NURSERY TEACHER TRAINNING(RVV24001)','  Diploma in Computer Application (RV24005)',' UNDER GRADUATE DIPLOMA IN FASHION DESIGNING(RVV24006)',' POST GRADUATE DIPLOMA IN INFORMATION TECHNOLOGY(RV24001)',], // 24 MONTHS COURSES



    '20': [' 1-Year Health Care Option 1','1-Year Health Care Option 2',  ], // 1 YEAR HEALTH CARE COURSE
    '21': ['2-Years Health Care Option 1','2-Years Health Care Option 2',], // 2 YEARS HEALTH CARE COURSE
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (name === 'course') {
      setSelectedCourse(value);
      setFormData({ ...formData, course: value, courseOption: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.firstname || !formData.lastname || !formData.dob || !formData.district || !formData.course || !formData.courseOption) {
      setError('Please fill out all required fields.');
      return;
    }

    setError('');
    setStudents([...students, formData]);

    // Reset form data after submission
    setFormData({
      firstname: '',
      lastname: '',
      dob: '',
      district: '',
      course: '',
      courseOption: '',
      mothername: '',
      qualification: '',
      contactno: '',
      guardiancontact: '',
      adhar: '',
      gender: '',
      category: '',
      religion: '',
      maritalstatus: '',
      address: '',
      presentaddress: '',
      photo: null,
      signature: null,
      marksheet: null,
    });
    setSelectedCourse('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Add Student</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                  Date of Birth:
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="district" className="block text-sm font-medium text-gray-700">
                  District:
                </label>
                <select
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">--Select--</option>
                  <option value="Almora">Almora</option>
                  <option value="Nainital">Nainital</option>
                  <option value="Dehradun">Dehradun</option>
                  <option value="Uttarkashi">Uttarkashi</option>
                  <option value="Rudraprayag">Rudraprayag</option>
                  <option value="Udham Singh Nagar">Udham Singh Nagar</option>
                  <option value="Bageshwar">Bageshwar</option>
                  <option value="Tehri Garhwal">Tehri Garhwal</option>
                  <option value="Chamoli">Chamoli</option>
                  <option value="Haridwar">Haridwar</option>
                  <option value="Pauri Garhwal">Pauri Garhwal</option>
                  <option value="Pithoragarh">Pithoragarh</option>
                  <option value="Champawat">Champawat</option>
                </select>
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                  Course Applying For:
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">--Select Course--</option>
                  <option value="8">1 MONTH COURSES</option>
                  <option value="9">3 MONTHS COURSES</option>
                  <option value="14">6 MONTHS COURSES</option>
                  <option value="15">12 MONTHS COURSES</option>
                  <option value="12">18 MONTHS COURSES</option>
                  <option value="13">24 MONTHS COURSES</option>
                  <option value="20">1 YEAR HEALTH CARE COURSE</option>
                  <option value="21">2 YEARS HEALTH CARE COURSE</option>
                </select>
              </div>

              {selectedCourse && (
                <div className="w-full md:w-1/2 px-4 mb-4">
                  <label htmlFor="courseOption" className="block text-sm font-medium text-gray-700">
                    Course Option:
                  </label>
                  <select
                    id="courseOption"
                    name="courseOption"
                    value={formData.courseOption}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">--Select Course Option--</option>
                    {courseOptions[selectedCourse]?.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Additional form fields */}
              <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="mothername" className="block text-sm font-medium text-gray-700">
                  Mother's Name:
                </label>
                <input
                  type="text"
                  id="mothername"
                  name="mothername"
                  value={formData.mothername}
                  onChange={handleChange}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="qualification" className="block text-sm font-medium text-gray-700">
                  Qualification:
                </label>
                <input
                  type="text"
                  id="qualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="contactno" className="block text-sm font-medium text-gray-700">
                  Contact Number:
                </label>
                <input
                  type="text"
                  id="contactno"
                  name="contactno"
                  value={formData.contactno}
                  onChange={handleChange}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="guardiancontact" className="block text-sm font-medium text-gray-700">
                  Guardian Contact Number:
                </label>
                <input
                  type="text"
                  id="guardiancontact"
                  name="guardiancontact"
                  value={formData.guardiancontact}
                  onChange={handleChange}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="adhar" className="block text-sm font-medium text-gray-700">
                  Aadhar Number:
                </label>
                <input
                  type="text"
                  id="adhar"
                  name="adhar"
                  value={formData.adhar}
                  onChange={handleChange}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Gender:
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">--Select Gender--</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category:
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="religion" className="block text-sm font-medium text-gray-700">
                  Religion:
                </label>
                <input
                  type="text"
                  id="religion"
                  name="religion"
                  value={formData.religion}
                  onChange={handleChange}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="maritalstatus" className="block text-sm font-medium text-gray-700">
                  Marital Status:
                </label>
                <input
                  type="text"
                  id="maritalstatus"
                  name="maritalstatus"
                  value={formData.maritalstatus}
                  onChange={handleChange}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address:
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="presentaddress" className="block text-sm font-medium text-gray-700">
                  Present Address:
                </label>
                <textarea
                  id="presentaddress"
                  name="presentaddress"
                  value={formData.presentaddress}
                  onChange={handleChange}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                  Upload Photo:
                </label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  onChange={handleChange}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="signature" className="block text-sm font-medium text-gray-700">
                  Upload Signature:
                </label>
                <input
                  type="file"
                  id="signature"
                  name="signature"
                  onChange={handleChange}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="marksheet" className="block text-sm font-medium text-gray-700">
                  Upload Marksheet:
                </label>
                <input
                  type="file"
                  id="marksheet"
                  name="marksheet"
                  onChange={handleChange}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {error && <p className="text-red-500">{error}</p>}
            </div>
            <button
              type="submit"
              className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              Add Student
            </button>
          </fieldset>
        </form>
        <StudentTable students={students} />
      </div>
    </div>
  );
};

export default AddStudent;
