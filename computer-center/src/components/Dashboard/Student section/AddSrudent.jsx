import React from 'react';

const AddStudent = () => {
    return (
        <div className="bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <form action="/submit" method="post" encType="multipart/form-data">
                    <fieldset className="space-y-4">
                        <legend className="text-2xl font-bold mb-6 text-center">Student Registration Form</legend>

                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full md:w-1/2 px-4 mb-4">
                                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State:</label>
                                <select id="state" name="state"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                    <option value="select">--Select--</option>
                                    {/* Add options here */}
                                </select>
                            </div>

                            <div className="w-full md:w-1/2 px-4 mb-4">
                                <label htmlFor="district" className="block text-sm font-medium text-gray-700">District:</label>
                                <select id="district" name="district"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                    <option value="select">--Select--</option>
                                    {/* Add options here */}
                                </select>
                            </div>

                            <div className="w-full md:w-1/2 px-4 mb-4">
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City:</label>
                                <input type="text" id="city" name="city"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>

                            <div className="w-full md:w-1/2 px-4 mb-4">
                                <label htmlFor="center" className="block text-sm font-medium text-gray-700">Center:</label>
                                <input type="text" id="center" name="center"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>

                            <div className="w-full md:w-1/2 px-4 mb-4">
                                <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course Applying For:</label>
                                <select id="course" name="course"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                    <option value="select">--Select Course--</option>
                                   
                                 <option value="11">12 MONTHS COURSES</option><option value="10">6 MONTHS COURSES</option><option value="8">1 MONTH COURSES</option><option value="9">3 MONTHS COURSES</option><option value="12">18 MONTHS COURSES</option><option value="13">24 MONTHS COURSES</option><option value="14">6 MONTHS SPECIAL COURSES</option><option value="15">12 MONTHS SPECIAL COURSES</option><option value="16">24 MONTHS SPECIAL COURSES</option><option value="18">3 Month Special Courses</option><option value="19">18 Months Special Courses</option><option value="20">1 Year Health Care Course</option><option value="21">2 Years Health Care Course</option>                             
                                </select>
                               
                            </div>

                            <div className="w-full md:w-1/2 px-4 mb-4">
                                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth:</label>
                                <input type="date" id="dob" name="dob"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>

                            <div className="w-full md:w-1/2 px-4 mb-4">
                                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First Name:</label>
                                <input type="text" id="firstname" name="firstname"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>

                            <div className="w-full md:w-1/2 px-4 mb-4">
                                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last Name:</label>
                                <input type="text" id="lastname" name="lastname"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>

                            <div className="w-full md:w-1/2 px-4 mb-4">
                                <label htmlFor="fathername" className="block text-sm font-medium text-gray-700">Father's Name:</label>
                                <input type="text" id="fathername" name="fathername"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>

                            <div className="w-full md:w-1/2 px-4 mb-4">
                                <label htmlFor="fatheroccupation" className="block text-sm font-medium text-gray-700">Father's Occupation:</label>
                                <select id="fatheroccupation" name="fatheroccupation"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                    <option value="select">--Select--</option>
                                    {/* Add options here */}
                                </select>
                            </div>

                            <div className="w-full md:w-1/2 px-4 mb-4">
                                <label htmlFor="mothername" className="block text-sm font-medium text-gray-700">Mother's Name:</label>
                                <input type="text" id="mothername" name="mothername"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>

                            <div className="w-full md:w-1/2 px-4 mb-4">
                                <label htmlFor="motheroccupation" className="block text-sm font-medium text-gray-700">Mother's Occupation:</label>
                                <select id="motheroccupation" name="motheroccupation"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                    <option value="select">--Select--</option>
                                    {/* Add options here */}
                                </select>
                            </div>

                            <div className="w-full md:w-1/2 px-4 mb-4">
                                <label htmlFor="annualincome" className="block text-sm font-medium text-gray-700">Family Income:</label>
                                <input type="text" id="annualincome" name="annualincome"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>

                            <div className="w-full md:w-1/2 px-4 mb-4">
                                <label htmlFor="qualification" className="block text-sm font-medium text-gray-700">Qualification:</label>
                                <select id="qualification" name="qualification"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                    <option value="select">--Select--</option>
                                    {/* Add options here */}
                                </select>
                            </div>

                            <div className="w-full md:w-1/2 px-4 mb-4">
                                <label htmlFor="contactno" className="block text-sm font-medium text-gray-700">Contact No:</label>
                                <input type="tel" id="contactno" name="contactno"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>

                            <div className="w-full md:w-1/2 px-4 mb-4">
                                <label htmlFor="guardiancontact" className="block text-sm font-medium text-gray-700">Guardian Contact No:</label>
                                <input type="tel" id="guardiancontact" name="guardiancontact"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>

                            <div className="w-full md:w-1/2 px-4 mb-4">
                                <label htmlFor="adhar" className="block text-sm font-medium text-gray-700">Aadhar Number:</label>
                                <input type="text" id="adhar" name="adhar"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>

                            <div className="w-full md:w-1/2 px-4 mb-4">
                                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender:</label>
                                <select id="gender" name="gender"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="w-full md:w-1/2 px-4 mb-4">
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
                                <select id="category" name="category"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                    <option value="select">--Select--</option>
                                    <option value="gen">GEN</option>
                                    <option value="obc">OBC</option>
                                    <option value="sc">SC</option>
                                    <option value="st">ST</option>
                                    {/* Add more options here */}
                                </select>
                            </div>

                            <div className="w-full md:w-1/2 px-4 mb-4">
                                <label htmlFor="religion" className="block text-sm font-medium text-gray-700">Religion:</label>
                                <select id="religion" name="religion"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                    <option value="select">--Select--</option>
                                    {/* Add options here */}
                                </select>
                            </div>

                            <div className="w-full md:w-1/2 px-4 mb-4">
                                <label htmlFor="maritalstatus" className="block text-sm font-medium text-gray-700">Marital Status:</label>
                                <select id="maritalstatus" name="maritalstatus"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                    <option value="select">--Select--</option>
                                    <option value="married">Married</option>
                                    <option value="unmarried">Unmarried</option>
                                </select>
                            </div>

                            <div className="w-full md:w-1/2 px-4 mb-4">
                                <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Upload Photo:</label>
                                <input type="file" id="photo" name="photo"
                                    className="mt-1 block w-full text-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>

                            <div className="w-full md:w-1/2 px-4 mb-4">
                                <label htmlFor="signature" className="block text-sm font-medium text-gray-700">Upload Signature:</label>
                                <input type="file" id="signature" name="signature"
                                    className="mt-1 block w-full text-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>

                            <div className="w-full md:w-1/2 px-4 mb-4">
                                <label htmlFor="marksheet" className="block text-sm font-medium text-gray-700">Upload Marksheet:</label>
                                <input type="file" id="marksheet" name="marksheet"
                                    className="mt-1 block w-full text-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>

                            <div className="w-full px-4 mb-4">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Permanent Address:</label>
                                <textarea id="address" name="address"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    rows="3"></textarea>
                            </div>

                            <div className="w-full px-4 mb-4">
                                <label htmlFor="presentaddress" className="block text-sm font-medium text-gray-700">Present Address:</label>
                                <textarea id="presentaddress" name="presentaddress"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    rows="3"></textarea>
                            </div>

                            <div className="w-full px-4 mb-4">
                                <div className="flex items-center justify-center">
                                    <div className="g-recaptcha" data-sitekey="your_site_key"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button type="submit"
                                className="px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                Submit
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default AddStudent;
