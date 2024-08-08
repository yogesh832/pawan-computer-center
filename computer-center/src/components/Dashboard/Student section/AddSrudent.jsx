import React, { useState } from "react";

const AddStudent = () => {
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form action="/submit" method="post" encType="multipart/form-data">
          <fieldset className="space-y-4">
            <legend className="text-2xl font-bold mb-6 text-center">
              Student Registration Form
            </legend>

            <div className="flex flex-wrap -mx-4">
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
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="select">--Select--</option>
                  <option value="AP">Andhra Pradesh</option>
                  <option value="AR">Arunachal Pradesh</option>
                  <option value="AS">Assam</option>
                  <option value="BR">Bihar</option>
                  <option value="CT">Chhattisgarh</option>
                  <option value="GA">Gujarat</option>
                  <option value="HR">Haryana</option>
                  <option value="HP">Himachal Pradesh</option>
                  <option value="JK">Jammu and Kashmir</option>
                  <option value="GA">Goa</option>
                  <option value="JH">Jharkhand</option>
                  <option value="KA">Karnataka</option>
                  <option value="KL">Kerala</option>
                  <option value="MP">Madhya Pradesh</option>
                  <option value="MH">Maharashtra</option>
                  <option value="MN">Manipur</option>
                  <option value="ML">Meghalaya</option>
                  <option value="MZ">Mizoram</option>
                  <option value="NL">Nagaland</option>
                  <option value="OR">Odisha</option>
                  <option value="PB">Punjab</option>
                  <option value="RJ">Rajasthan</option>
                  <option value="SK">Sikkim</option>
                  <option value="TN">Tamil Nadu</option>
                  <option value="TG">Telangana</option>
                  <option value="TR">Tripura</option>
                  <option value="UT">Uttarakhand</option>
                  <option value="UP">Uttar Pradesh</option>
                  <option value="WB">West Bengal</option>
                  <option value="AN">Andaman and Nicobar Islands</option>
                  <option value="CH">Chandigarh</option>
                  <option value="DN">Dadra and Nagar Haveli</option>
                  <option value="DD">Daman and Diu</option>
                  <option value="DL">Delhi</option>
                  <option value="LD">Lakshadweep</option>
                  <option value="PY">Puducherry</option>
                </select>
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label
                  htmlFor="district"
                  className="block text-sm font-medium text-gray-700"
                >
                  District:
                </label>
                <select
                  id="district"
                  name="district"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="select">--Select--</option>
                <option value="">Almora</option>
                <option value="">Nainital</option>
                <option value=""> Dehradun</option>
                <option value=""> Uttarkashi</option>
                <option value="">Rudraprayag</option>
                <option value=""> Uddham Singh Nagar</option>
                <option value="">Bageshwar</option>
                <option value="">Tehri Garhwal</option>
                <option value="">Chamoli</option>
                <option value="">Haridwar</option>
                <option value=""> Pauri Garhwal</option>
                <option value=""> Pithoragarh</option>
                <option value=""> Champawat</option>
                </select>
              </div>

              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 px-4 mb-4">
                  <label
                    htmlFor="course"
                    className="block text-sm font-medium min-w-[50%] text-gray-700"
                    style={{ minWidth: "50%" }}
                  >
                    Course Applying For:
                  </label>
                  <select
                    id="course"
                    name="course"
                    defaultValue={selectedCourse}
                    onChange={handleCourseChange}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="5">--Select Course--</option>
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

                {selectedCourse === "8" && (
                  <div className="w-full md:w-1/2 px-4 mb-4">
                    <label
                      htmlFor="courseOption"
                      className="block text-sm font-medium text-gray-700"
                    >
                      1 Month Course Options:
                    </label>
                    <select
                      id="courseOption"
                      name="courseOption"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option selected="selected" value="">
                        --Select Course--
                      </option>
                      <option value="13">
                        CERTIFICATE IN FUNDAMENTAL(RV01001)
                      </option>
                      <option value="19">
                        CERTIFICATE IN MS EXCEL(RV01003)
                      </option>
                      <option value="20">
                        CERTIFICATE IN MS POWER POINT(RV01004)
                      </option>
                      <option value="14">
                        CERTIFICATE IN MS WORD(RV01002)
                      </option>
                    </select>
                  </div>
                )}

                {selectedCourse === "9" && (
                  <div className="w-full  min-w-50% md:w-1/2 px-4 mb-4">
                    <label
                      htmlFor="courseOption"
                      className="block text-sm font-medium text-gray-700"
                    >
                      3-Month Course Options:
                    </label>
                    <select
                      id="courseOption"
                      name="courseOption"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option selected="selected" value="">
                        --Select Course--
                      </option>
                      <option value="86">
                        {" "}
                        Advanced Level Graphic Design(RV03039)
                      </option>
                      <option value="87">
                        {" "}
                        Advanced Level Video Production(RV03040)
                      </option>
                      <option value="70">
                        {" "}
                        CERTIFICATE IN ADOBE IN-DESIGN(RV03023)
                      </option>
                      <option value="40">
                        {" "}
                        CERTIFICATE IN ADOBE PREMIER(RV03012)
                      </option>
                      <option value="73"> CERTIFICATE IN AJAX(RV03026)</option>
                      <option value="47">
                        {" "}
                        CERTIFICATE IN ASP.NET, ADO.NET(RV03019)
                      </option>
                      <option value="79">
                        {" "}
                        CERTIFICATE IN AUTOCAD [2D &amp; 3D](RV03032)
                      </option>
                      <option value="46"> CERTIFICATE IN C(RV03018)</option>
                      <option value="48"> CERTIFICATE IN C ++(RV03020)</option>
                      <option value="29">
                        {" "}
                        CERTIFICATE IN COMPUTER BASIC(RV03003)
                      </option>
                      <option value="80">
                        {" "}
                        CERTIFICATE IN CORE JAVA(RV03033)
                      </option>
                      <option value="39">
                        {" "}
                        CERTIFICATE IN COREL DRAW(RV03011)
                      </option>
                      <option value="85">
                        {" "}
                        CERTIFICATE IN DOTNET PROGRAMMING(RV03038)
                      </option>
                      <option value="45">
                        {" "}
                        CERTIFICATE IN DREAMWEAVER(RV03017)
                      </option>
                      <option value="83">
                        {" "}
                        CERTIFICATE IN ENGLISH &amp; REGIONAL LANGUAGE
                        TYPING(RV03036)
                      </option>
                      <option value="88"> CERTIFICATE IN EXCEL(RV03041)</option>
                      <option value="33">
                        {" "}
                        CERTIFICATE IN HINDI TYPING(RV03006)
                      </option>
                      <option value="74"> CERTIFICATE IN HTML(RV03027)</option>
                      <option value="71">
                        {" "}
                        CERTIFICATE IN ILLUSTRATOR(RV03024)
                      </option>
                      <option value="76">
                        {" "}
                        CERTIFICATE IN SERVLET, JSP, JDBC(RV03029)
                      </option>
                      <option value="43">
                        {" "}
                        CERTIFICATE IN SOUND FORGE(RV03015)
                      </option>
                      <option value="30">
                        {" "}
                        CERTIFICATE IN SPOKEN ENGLISH(RV03004)
                      </option>
                      <option value="75">
                        {" "}
                        CERTIFICATE IN VISUAL BASIC(RV03028)
                      </option>
                      <option value="150">
                        CERTIFICATE COURSE IN REVIT ARCHITECTURE(RVV03008)
                      </option>
                      <option value="41">
                        CERTIFICATE IN 3D STUDIO MAX(RV03013)
                      </option>
                      <option value="42">
                        CERTIFICATE IN AFTER EFFECTS(RV03014)
                      </option>
                      <option value="148">
                        CERTIFICATE IN ARTS &amp; CRAFT (RVV03006)
                      </option>
                      <option value="154">
                        CERTIFICATE IN BEAUTICIAN (RVV03012)
                      </option>
                      <option value="143">
                        CERTIFICATE IN BREAD CRAFTING (RVV03001)
                      </option>
                      <option value="28">
                        CERTIFICATE IN COMPUTER CONCEPTS(RV03002)
                      </option>
                      <option value="153">
                        CERTIFICATE IN COMPUTER NUMERICAL CONTROL PROGRAMMER
                        &amp; OPERATOR(RVV03011)
                      </option>
                      <option value="84">
                        CERTIFICATE IN DATA ENTRY OPERATOR(RV03037)
                      </option>
                      <option value="72">
                        CERTIFICATE IN DATA STRUCTURE(RV03025)
                      </option>
                      <option value="152">
                        CERTIFICATE IN DOLLS MAKING(RVV03010)
                      </option>
                      <option value="31">
                        CERTIFICATE IN ENGLISH TYPING(RV03005)
                      </option>
                      <option value="44">CERTIFICATE IN FLASH(RV03016)</option>
                      <option value="145">
                        CERTIFICATE IN FLOWER MAKING (RVV03003)
                      </option>
                      <option value="68">CERTIFICATE IN FOXPRO(RV03021)</option>
                      <option value="35">
                        CERTIFICATE IN INTERNET(RV03008)
                      </option>
                      <option value="78">CERTIFICATE IN LINUX(RV03031)</option>
                      <option value="147">
                        CERTIFICATE IN MAKEUP ARTIST (RVV03005)
                      </option>
                      <option value="149">
                        CERTIFICATE IN MEHANDI ART (RVV03007)
                      </option>
                      <option value="81">CERTIFICATE IN MYSQL(RV03034)</option>
                      <option value="36">
                        CERTIFICATE IN PAGEMAKER(RV03009)
                      </option>
                      <option value="146">
                        CERTIFICATE IN PARAFINE WORKS(RVV03004)
                      </option>
                      <option value="77">
                        CERTIFICATE IN PC MAINTENANCE(RV03030)
                      </option>
                      <option value="69">
                        CERTIFICATE IN PHOTOSHOP(RV03022)
                      </option>
                      <option value="82">CERTIFICATE IN PHP(RV03035)</option>
                      <option value="37">
                        CERTIFICATE IN QUARKXPRESS(RV03010)
                      </option>
                      <option value="144">
                        CERTIFICATE IN SOFT TOYS MAKING (RVV03002)
                      </option>
                      <option value="34">CERTIFICATE IN TALLY(RV03007)</option>
                      <option value="151">
                        CERTIFICATE IN VERTICAL MACHINING CENTERS PROGRAMMING
                        &amp; OPERATING (RVV03009)
                      </option>
                      <option value="27">
                        DIPLOMA IN COMPUTER APPLICATION(RV03001)
                      </option>
                    </select>
                  </div>
                )}

                {selectedCourse === "14" && (
                  <div className="w-full md:w-1/2 px-4 mb-4">
                    <label
                      htmlFor="courseOption"
                      className="block text-sm font-medium text-gray-700"
                    >
                      6-Month Course Options:
                    </label>
                    <select
                      id="courseOption"
                      name="courseOption"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option selected="selected" value="">
                        --Select Course--
                      </option>
                      <option value="175">
                        {" "}
                        DIPLOMA IN MOBILE REPAIRING &amp; SOFTWARE
                        INSTALLATION(RVV06021)
                      </option>
                      <option value="96">
                        {" "}
                        CERTIFICATE IN COMPUTER BASIC AND TALLY(RV06016)
                      </option>
                      <option value="98">
                        {" "}
                        CERTIFICATE IN ENGLISH AND HINDI TYPING(RV06018)
                      </option>
                      <option value="91">
                        {" "}
                        DIPLOMA IN BASIC MULTIMEDIA(RV06011)
                      </option>
                      <option value="89">
                        {" "}
                        DIPLOMA IN COMPUTER APPLICATION &amp;
                        ACCOUNTING(RV06009)
                      </option>
                      <option value="55">
                        {" "}
                        DIPLOMA IN COMPUTER PROGRAMMING(RV06007)
                      </option>
                      <option value="51">
                        {" "}
                        DIPLOMA IN DESK TOP PUBLISHING(RV06003)
                      </option>
                      <option value="50">
                        {" "}
                        DIPLOMA IN FINANCIAL ACCOUNTING(RV06002)
                      </option>
                      <option value="56">
                        {" "}
                        DIPLOMA IN PROFESSIONAL PROGRAMMING(RV06008)
                      </option>
                      <option value="95">
                        {" "}
                        DIPLOMA IN WEB PAGE DESIGNING(RV06015)
                      </option>
                      <option value="476">
                        Certificate in Advance Excel(RV06A102)
                      </option>
                      <option value="92">
                        CERTIFICATE IN AUTO CAD AND STAAD PRO(RV06012)
                      </option>
                      <option value="97">
                        CERTIFICATE IN COMPUTER APPLICATION(RV06017)
                      </option>
                      <option value="199">
                        CERTIFICATE IN DECORATIVE PAINTINGS(RVV06045)
                      </option>
                      <option value="100">
                        Certificate in Digital Marketing(RV06020)
                      </option>
                      <option value="94">
                        CERTIFICATE IN GRAPHIC DESIGNING(RV06014)
                      </option>
                      <option value="102">CERTIFICATE IN JAVA(RV06021)</option>
                      <option value="474">
                        CERTIFICATE IN PERSONALITY DEVELOPMENT(RVB01-066)
                      </option>
                      <option value="198">
                        DIPLOMA IN ARTS &amp; CRAFT(RVV06044)
                      </option>
                      <option value="167">
                        DIPLOMA IN AUTOMOBILE(RVV06013)
                      </option>
                      <option value="191">
                        DIPLOMA IN BASIC SECURITY GUARD TRAINING(RVV06037)
                      </option>
                      <option value="177">
                        DIPLOMA IN BASIC WOOD WORK(RVV06023)
                      </option>
                      <option value="159">
                        DIPLOMA IN BEAUTICIAN (RVV06005)
                      </option>
                      <option value="184">
                        DIPLOMA IN BOOK BINDING(RVV06030)
                      </option>
                      <option value="185">
                        DIPLOMA IN BUILDING AND CONSTRUCTION(RVV06031)
                      </option>
                      <option value="194">
                        DIPLOMA IN BUILDING AND CONSTRUCTION
                        SUPERVISOR(RVV06040)
                      </option>
                      <option value="172">
                        DIPLOMA IN COLOUR T.V REPAIRING(RVV06018)
                      </option>
                      <option value="165">
                        DIPLOMA IN COMMERCIAL PHOTOGRAPHY(RVV06011)
                      </option>
                      <option value="200">
                        DIPLOMA IN COMMUNICATIVE ENGLISH(RVV06046)
                      </option>
                      <option value="189">
                        DIPLOMA IN COMPACT TRAVEL &amp; TOURISM(RVV06035)
                      </option>
                      <option value="49">
                        DIPLOMA IN COMPUTER APPLICATION(RV06001)
                      </option>
                      <option value="158">
                        DIPLOMA IN CUTTING &amp; TAILORING(RVV06004)
                      </option>
                      <option value="99">
                        DIPLOMA IN DATA ENTRY OPERATOR(RV06019)
                      </option>
                      <option value="162">
                        DIPLOMA IN DIGITAL PHOTOGRAPHY (RVV06008)
                      </option>
                      <option value="93">
                        DIPLOMA IN DOTNET PROGRAMMING(RV06013)
                      </option>
                      <option value="163">
                        DIPLOMA IN FASHION DESIGNING (RVV06009)
                      </option>
                      <option value="195">
                        DIPLOMA IN FLOOR MAKING &amp; TILES SETTING(RVV06041)
                      </option>
                      <option value="157">
                        DIPLOMA IN HAIR &amp; SKIN CARE DIPLOMA IN TAILORING
                        READY(RVV06003)
                      </option>
                      <option value="161">
                        DIPLOMA IN HAIR CUTTING &amp; DESIGNING (RVV06007)
                      </option>
                      <option value="52">
                        DIPLOMA IN HARDWARE MAINTENANCE(RV06004)
                      </option>
                      <option value="192">
                        DIPLOMA IN HOUSE KEEPING(RVV06038)
                      </option>
                      <option value="164">
                        DIPLOMA IN INTERIOR DESIGNING(RVV06010)
                      </option>
                      <option value="53">
                        DIPLOMA IN INTERNET APPLICATION(RV06005)
                      </option>
                      <option value="196">
                        DIPLOMA IN LEVELING &amp; SETTING OUT(RVV06042)
                      </option>
                      <option value="197">
                        DIPLOMA IN MAKEUP ARTIST(RVV06043)
                      </option>
                      <option value="183">
                        DIPLOMA IN METAL SURFACE PAINTING(RVV06029)
                      </option>
                      <option value="155">
                        DIPLOMA IN MOBILE MAINTENANCE (RVV06001)
                      </option>
                      <option value="90">DIPLOMA IN NETWORKING(RV06010)</option>
                      <option value="180">
                        DIPLOMA IN PAINTER ASSISTANT(RVV06026)
                      </option>
                      <option value="187">
                        DIPLOMA IN PLUMBING &amp; PIPEFITTING(RVV06033)
                      </option>
                      <option value="171">
                        DIPLOMA IN REFRIGERATION &amp; AC REPAIRING(RVV06017)
                      </option>
                      <option value="169">
                        DIPLOMA IN RETAIL MANAGEMENT(RVV06015)
                      </option>
                      <option value="173">
                        DIPLOMA IN RETAIL SALES(RVV06019)
                      </option>
                      <option value="188">
                        DIPLOMA IN SECURITY &amp; SAFETY MANAGEMENT(RVV06034)
                      </option>
                      <option value="170">
                        DIPLOMA IN SILK-SCREEN PRINTING(RVV06016)
                      </option>
                      <option value="166">
                        DIPLOMA IN SKIN &amp; BEAUTY THERAPY(RVV06012)
                      </option>
                      <option value="156">
                        DIPLOMA IN SOFT TOYS MAKING (RVV06002)
                      </option>
                      <option value="179">
                        DIPLOMA IN SPRAY PAINTING(RVV06025)
                      </option>
                      <option value="193">
                        DIPLOMA IN STORE KEEPING(RVV06039)
                      </option>
                      <option value="174">
                        DIPLOMA IN TELEPHONE REPAIRING &amp; SERVICING(RVV06020)
                      </option>
                      <option value="190">
                        DIPLOMA IN TRAVEL BUSINESS ADMINISTRATION(RVV06036)
                      </option>
                      <option value="176">
                        DIPLOMA IN VIDEOGRAPHY ASSOCIATES(RVV06022)
                      </option>
                      <option value="181">
                        DIPLOMA IN WALL PAINTING(RVV06027)
                      </option>
                      <option value="54">
                        DIPLOMA IN WEB TECHNOLOGY(RV06006)
                      </option>
                      <option value="186">
                        DIPLOMA IN WELDING TECHNICIAN(RVV06032)
                      </option>
                      <option value="178">
                        DIPLOMA IN WOOD PAINTING(RVV06024)
                      </option>
                      <option value="182">
                        DIPLOMA IN WOODEN FURNITURE MAKING(RVV06028)
                      </option>
                      <option value="168">
                        RADIO-TAPE-T.V REPAIRING(RVV06014)
                      </option>
                      <option value="160">
                        TO WEAR WITH ANGELA WOLF (RVV06006)
                      </option>
                    </select>
                  </div>
                )}

                {selectedCourse === "15" && (
                  <div className="w-full md:w-1/2 px-4 mb-4">
                    <label
                      htmlFor="courseOption"
                      className="block text-sm font-medium text-gray-700"
                    >
                      12-Month Special Course Options:
                    </label>
                    <select
                      id="courseOption"
                      name="courseOption"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="option1">12-Month Special Option 1</option>
                      <option value="option2">12-Month Special Option 2</option>
                    </select>
                  </div>
                )}

                {selectedCourse === "12" && (
                  <div className="w-full md:w-1/2 px-4 mb-4">
                    <label
                      htmlFor="courseOption"
                      className="block text-sm font-medium text-gray-700"
                    >
                      18-Month Course Options:
                    </label>
                    <select
                      id="courseOption"
                      name="courseOption"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option selected="selected" value="">
                        --Select Course--
                      </option>
                      <option value="130">
                        ADVANCE DIPLOMA IN COMPUTER APPLICATION(RV18001)
                      </option>
                      <option value="468">
                        Master Diploma in Computer information(EV18002)
                      </option>
                    </select>
                  </div>
                )}

                {selectedCourse === "13" && (
                  <div className="w-full md:w-1/2 px-4 mb-4">
                    <label
                      htmlFor="courseOption"
                      className="block text-sm font-medium text-gray-700"
                    >
                      24-Month Course Options:
                    </label>
                    <select
                      id="courseOption"
                      name="courseOption"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option selected="selected" value="">
                        --Select Course--
                      </option>
                      <option value="140">
                        Advance Diploma in Barbering(RVV24004)
                      </option>
                      <option value="133">
                        ADVANCE DIPLOMA IN COMPUTER HARDWARE &amp; NETWORKING
                        ENGINEERING(RV24003)
                      </option>
                      <option value="136">
                        ADVANCE DIPLOMA IN FINANCIAL ACCOUNTING(RV24006)
                      </option>
                      <option value="134">
                        ADVANCE DIPLOMA IN INFORMATION TECHNOLOGY(RV24004)
                      </option>
                      <option value="137">
                        ADVANCE DIPLOMA IN NURSERY TEACHER TRAINNING(RVV24001)
                      </option>
                      <option value="135">
                        Diploma in Computer Application (RV24005)
                      </option>
                      <option value="141">Diploma in Cooking(RVV24005)</option>
                      <option value="138">Diploma in Yoga(RVV24002)</option>
                      <option value="139">
                        Diploma Programs in Professional Cooking(RVV24003)
                      </option>
                      <option value="132">
                        POST GRADUATE DIPLOMA IN COMPUTER TEACHER
                        TRAINING(RV24002)
                      </option>
                      <option value="131">
                        POST GRADUATE DIPLOMA IN INFORMATION TECHNOLOGY(RV24001)
                      </option>
                      <option value="142">
                        UNDER GRADUATE DIPLOMA IN FASHION DESIGNING(RVV24006)
                      </option>
                    </select>
                  </div>
                )}

                {selectedCourse === "20" && (
                  <div className="w-full md:w-1/2 px-4 mb-4">
                    <label
                      htmlFor="courseOption"
                      className="block text-sm font-medium text-gray-700"
                    >
                      1-Year Health Care Course Options:
                    </label>
                    <select
                      id="courseOption"
                      name="courseOption"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="option1">
                        1-Year Health Care Option 1
                      </option>
                      <option value="option2">
                        1-Year Health Care Option 2
                      </option>
                    </select>
                  </div>
                )}

                {selectedCourse === "21" && (
                  <div className="w-full md:w-1/2 px-4 mb-4">
                    <label
                      htmlFor="courseOption"
                      className="block text-sm font-medium text-gray-700"
                    >
                      2-Years Health Care Course Options:
                    </label>
                    <select
                      id="courseOption"
                      name="courseOption"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="option1">
                        2-Years Health Care Option 1
                      </option>
                      <option value="option2">
                        2-Years Health Care Option 2
                      </option>
                    </select>
                  </div>
                )}
              </div>

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
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

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
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

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
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label
                  htmlFor="fathername"
                  className="block text-sm font-medium text-gray-700"
                >
                  Father's Name:
                </label>
                <input
                  type="text"
                  id="fathername"
                  name="fathername"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

             

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label
                  htmlFor="mothername"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mother's Name:
                </label>
                <input
                  type="text"
                  id="mothername"
                  name="mothername"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

            

             

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
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label
                  htmlFor="contactno"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contact Number:
                </label>
                <input
                  type="tel"
                  id="contactno"
                  name="contactno"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label
                  htmlFor="guardiancontact"
                  className="block text-sm font-medium text-gray-700"
                >
                  Guardian Contact:
                </label>
                <input
                  type="tel"
                  id="guardiancontact"
                  name="guardiancontact"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>


{/* 
              <div className="w-full md:w-1/2 px-4 mb-4">
        <label
          htmlFor="adhar"
          className="block text-sm font-medium text-gray-700"
        >
          Aadhar Number:
        </label>
        <input
          type="text"
          id="adhar"
          name="adhar"
          value={input}
          onChange={(e)=>{
             e.preventDefault();
    const cleanInput = input.replace(/\s/g, ''); // Remove spaces for final validation
    const isValid = /^[2-9][0-9]{11}$/.test(cleanInput);

    if (isValid) {
      alert('Form submitted successfully!');
    } else {
      setError('Please correct the input errors.');
    }
          }}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          maxLength="15" // 12 digits + 3 spaces
          placeholder="2345 6789 0123"
        />
        {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
      </div>
 */}


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
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">--Select Gender--</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

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
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">--Select Category--</option>
                  <option value="general">General</option>
                  <option value="sc">SC</option>
                  <option value="st">ST</option>
                  <option value="obc">OBC</option>
                </select>
              </div>

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
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

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
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">--Select--</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                </select>
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upload Photo:
                </label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label
                  htmlFor="signature"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upload Signature:
                </label>
                <input
                  type="file"
                  id="signature"
                  name="signature"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label
                  htmlFor="marksheet"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upload Marksheet:
                </label>
                <input
                  type="file"
                  id="marksheet"
                  name="marksheet"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="w-full px-4 mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Permanent Address:
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>

              <div className="w-full px-4 mb-4">
                <label
                  htmlFor="presentaddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Present Address:
                </label>
                <textarea
                  id="presentaddress"
                  name="presentaddress"
                  rows="3"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>

              <div className="w-full px-4 mb-4">
                <div className="flex items-center justify-center">
                  <div
                    className="g-recaptcha"
                    data-sitekey="your_site_key"
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
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
