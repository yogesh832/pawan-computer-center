import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CourseCard } from "../CourseCard.jsx";
import img from "../../../assets/Images/books.jpg";

// Course data
const courseData = [
  {
    title: "ADVANCE DIPLOMA IN WEBSITE DESIGNING",
    semester: "Semester 1 and 2",
    description:
      "Computer Fundamentals Designing Concept  HTML Corel Draw Photo Shop Flash Page Maker Dream Weaver DHTML VB Script SEMESTER-II C# JAVAScript PHP, MYSQL HOSTING Project",
    image: img,
  },
  {
    title: "ADVANCE DIPLOMA IN MULTIMEDIA",
    semester: "Semester 1 and 2",
    description:
      "SEMESTER-I Computer Fundamentals,Windows 10,MS Office 10,Adobe Photoshop,Corel Draw,Adobe Illustrator SEMESTER-II Flash,Adobe Page Maker,Adobe Premier,After Effects,Sound Forge,3Ds Max. Project",
    image: img,
  },
  {
    title: "ADVANCE DIPLOMA IN FINANCIAL ACCOUNTING",
    semester: "Semester 1 and 2",
    description:
      "SEMESTER- I Computer Fundamentals, Windows 7,Ms Office 2007,SEMESTER- II Accounting Concept,Tally ERP9,Others Accounting Package,Internet.Project work",
    image: img,
  },
  {
    title: "DIPLOMA IN COMPUTER APPLICATION",
    semester: "Semester 1 and 2",
    description:
      "Semester- I: Computer Fundamentals,Windows 7,Ms Office 2007 Semester- II: Photoshop,Coreldraw,Internet",
    image: img,
  },
  {
    title: "ADVANCE DIPLOMA IN WEBSITE DESIGNING & DEVELOPMENT",
    semester: "Semester 1 and 2",
    description:
      "SEMESTER-I: Computer Fundamentals, CorelDraw, Photoshop, Designing Concept HTML, DHTML, JAVA Script. SEMESTER-II: CSS, PHP, MYSQL, PROJECT",
    image: img,
  },
  {
    title: "ADVANCE DIPLOMA IN COMPUTER APPLICATION",
    semester: "Semester 1 and 2",
    description:
      "SEMESTER-I: Computer Fundamentals, Windows 10, MS Office 2010, English Typing, Regional Typing, Tally. SEMESTER-II: Photoshop, Coreldraw, C programming, Internet.",
    image: img,
  },
  {
    title: "ADVANCE DIPLOMA IN COMPUTER HARDWARE & NETWORKING ENGINEERING",
    semester: "Semester 1 and 2",
    description:
      "SEMESTER-I: Computer Fundamentals, Computer Software and Windows, MS Office (Word, Excel, PowerPoint). SEMESTER-II: Basic Electronics & Measuring Instruments, Operating System, Architecture of System, PC Assembling, LAN & Networking, etc.",
    image: img,
  },
  {
    title: "ADVANCE DIPLOMA IN COMPUTER SOFTWARE SYSTEM ANALYSIS & APPLICATION",
    semester: "Semester 1 and 2",
    description:
      "SEMESTER-I: Computer Basics, Windows 7, MS Office 2007, Internet, Photoshop, HTML, CSS. SEMESTER-II: Language C, Language C++, Structural Analysis, Programming Concept, PHP with MySQL, Database Management with Oracle.",
    image: img,
  },
  {
    title: "ADVANCE DIPLOMA IN COMPUTER PROGRAMMING",
    semester: "Semester 1 and 2",
    description:
      "SEMESTER-I: Computer Basics, Windows, MS Office 2010, Internet, Photoshop. SEMESTER-II: Programming Concept, Language C, C++, Java, C#, .NET VB Language, HTML, JavaScript, Project.",
    image: img,
  },
  {
    title: "POST GRADUATE DIPLOMA IN COMPUTER APPLICATION",
    semester: "Semester 1 and 2",
    description:
      "SEMESTER-I: Fundamentals of Computers, Windows XP/7/8/10, MS Office 2010, English Typing, Internet, Photoshop, Programming in C & C++, Accounting Concept, Tally. SEMESTER-II: Website Designing, HTML, DHTML, XML, JavaScript, Visual Basic, Computer Hardware & Networking Concept.",
    image: img,
  },
  {
    title: "DIPLOMA IN OFFICE AUTOMATION & PUBLISHING",
    semester: "Semester 1 and 2",
    description:
      "SEMESTER-I: Computer Concept & Fundamental, Operating System, DOS, Notepad, WordPad, MS Paint, MS Office, Word, Excel, PowerPoint, Introduction to Internet & Email, HTML, Typing Master. SEMESTER-II: Computerized Accounting in Tally ERP.9, PageMaker, Corel Draw, Photoshop, Project.",
    image: img,
  },
  {
    title: "ADVANCE DIPLOMA IN COMPUTER APPLICATION & IT",
    semester: "Semester 1 and 2",
    description:
      "Semester-I: Computer Fundamentals, DOS, Windows 7, MS Office 2010, Word, Excel, PowerPoint, Access, Photoshop, Corel Draw, Tally. Semester-II: Programming C, C++, Java, Internet.",
    image: img,
  },
  {
    title: "ADVANCE DIPLOMA IN COMPUTER TEACHER TRAINING AND ACCOUNTING",
    semester: "Semester 1 and 2",
    description:
      "Semester-I: Computer Fundamentals, Typing Master, Windows 7, MS Office 2010, Word, Excel, PowerPoint, Access. Semester-II: Accounting Concept, Tally ERP 9, Internet, HTML, Business Communication, C, C++, VB, Oracle, Java, Multimedia.",
    image: img,
  },
  {
    title: "DIPLOMA IN APPLICATION AND MANAGEMENT",
    semester: "Semester 1 and 2",
    description:
      "Semester-I: Fundamental of Computer, Operating System (DOS, Windows), MS Office, Internet in Details (Email, Online Searching, Downloading, Chatting, Online Banking). Semester-II: Desk Top Publishing, Photoshop, Page Maker, Corel Draw, Printing and Scanning, Computer Accounting (Tally), Introduction of Hardware (Formatting, OS and Software Loading).",
    image: img,
  },
  {
    title: "ADVANCE DIPLOMA IN COMPUTER TEACHER TRAINING PROGRAM",
    semester: "Semester 1 and 2",
    description:
      "Semester-I: Computer Fundamentals, Windows 7, Typing Master, Ms Office 2010 (Word, Excel, Power Point, Access), Internet, Business Communication, C, C++. Semester-II: VB, Oracle, Java, HTML.",
    image: img,
  },
  {
    title: "MASTER TRAINER COMPUTER APPLICATION",
    semester: "Semester 1 and 2",
    description:
      "Semester -I: Fundamental of Computer, Notepad, WordPad, MS-Paint, using Calculator, Advance Windows, MS-DOS, MS-Office 2007. Semester -II: Visual Basic, Internet, Bengali Word, Adobe PageMaker 6.5/7, Adobe Photoshop 7/CS2.",
    image: img,
  },
  {
    title: "ADVANCE DIPLOMA IN DESK TOP PUBLISHING",
    semester: "Semester 1 and 2",
    description:
      "Semester - I: Computer Concept & Fundamentals, Operating System (Windows XP, Windows 7), MS Office (Word, Excel, PowerPoint), Regional Typing, Introduction to Internet & Email. Semester - II: Page Maker, Corel Draw, Photo Shop, Free Hand, Project Work & Practical.",
    image: img,
  },
  {
    title: "DIPLOMA IN OFFICE APPLICATION AND MANAGEMENT",
    semester: "Semester 1 and 2",
    description:
      "Semester - I: Computer Fundamentals, MS Office 2007 (Word, Excel, Access, PowerPoint), English & Regional Typing, Spoken English, PageMaker, Corel Draw, Photoshop. Semester - II: Accounting Concept, Tally, Introduction to Hardware & Software, Internet.",
    image: img,
  },
  {
    title: "DIPLOMA IN COMPUTER APLICATION & ACCOUNTING",
    semester: "Semester 1 and 2",
    description:
      "Semester - I: Computer Fundamentals, Windows 7, MS Paint, Notepad, WordPad, English Typing using Typing Master, Bengali Word, MS Office (Word, Excel, PowerPoint). Semester - II: Tally 9, Tally ERP 9, Real Life Project, Internet.",
    image: img,
  },
  {
    title: "ADVANCED DIPLOMA IN IT APLICATION",
    semester: "Semester 1 and 2",
    description:
      "Semester-I: Computer Fundamentals, Windows 7, MS Paint, Notepad, WordPad, MS Office (Word, Excel, Access, PowerPoint). Semester-II: English Typing using Typing Master, Bengali Word Typing, Internet, Scanner & Printer Handling, HTML.",
    image: img,
  },
  {
    title: "DIPLOMA IN COMPUTER APPLICATION AND PROGRAMMING",
    semester: "Semester 1 and 2",
    description:
      "Semester-I: Computer Fundamental, Windows 7, MS Office (Word, Excel, PowerPoint, Access), Adobe Photoshop, Corel Draw. Semester-II: Regional Typing, HTML, Internet, Basics of Programming with C Language, C++, Tally.",
    image: img,
  },
  {
    title: "Diploma in Information Technology Application",
    semester: "Semester 1 and 2",
    description:
      "Semester-I: Computer Fundamentals, English Typing, Bengali Typing, Microsoft DOS, Microsoft Windows XP, Vista, Microsoft Office 2007 (Word, Excel, PowerPoint, Access), Internet & Email. Semester-II: Programming with Visual Basic, Programming C, RDBMS Concept with MS",
    image: img,
  },
  {
    title: "ADVANCE DIPLOMA IN COMPUTER APPLICATION -II",
    semester: "Semester 1 and 2",
    description:
      "SEMESTER-I: Computer Fundamentals, DOS, Windows, MS Office 2010 (Word, Excel, PowerPoint, Access), English Typing, Regional Typing, Account, Tally. SEMESTER-II: Photoshop, PageMaker, HTML, Internet.",
    image: img,
  },
  {
    title: "DIPLOMA IN BUSINESS & ACCOUNTS",
    semester: "Semester 1 and 2",
    description:
      "SEMESTER-I: Fundamental of Business & Accounts, Principal & Practices Management, MS Office (Word, Excel, PowerPoint, Access). SEMESTER-II: Inventory Control, Computer Accounting, Tally, Internet.",
    image: img,
  },
  {
    title: "DIPLOMA IN STENOGRAPHY",
    semester: "Semester 1 and 2",
    description:
      "SEMESTER-I: Professional Skill (Trade Practical), Professional Knowledge (Trade Theory), Employability Skills. SEMESTER-II: Library & Extracurricular Activities, English Typing (45 wpm), Hindi Typing (36 wpm), Project Work.",
    image: img,
  },
  {
    title: "DIPLOMA IN YOGA",
    semester: "Semester 1 and 2",
    description:
      "Semester-I: Foundations of Yoga, Principles of Hatha Yoga, Yoga and Allied Sciences, Human Anatomy and Physiology. Semester-II: Patanjali Yogasutra, Yoga Therapy, Shrimat Bhagavad Gita, Samkhyakarika, Indian Philosophy and Upanishad.",
    image: img,
  },
  {
    title: "DIPLOMA IN FASHION DESIGNING",
    semester: "Semester 1 and 2",
    description:
      "SEMESTER-I: Fashion Designing, Fashion Accessory, Textile Science, Pattern Making and Garment Construction, Fashion Merchandising and Management. SEMESTER-II: Fashion Illustration, Fashion Ornamentation, Product Specification, Computer-Aided Design, Fashion Marketing and Management.",
    image: img,
  },
  {
    title: "DIPLOMA IN NURSERY TEACHER TRAINING",
    semester: "Semester 1 and 2",
    description:
      "Semester-I: Child Psychology, Child Care & Health, Sociology & Guidance, School Organization, Principle of Education, Educational Psychology, Modern Method of Teaching, Method of Teaching Topic. Semester-II: Lesson Plan & Teaching, Art & Craft, Art File & Other File, Preparation of Teaching Aids, Rhymes, Action Song, Speech Story, VIVA, Internet Assessment etc.",
    image: img,
  },
  {
    title: "RVSP Fine Art",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Fine Art",
    image: img,
  },
  {
    title: "RVSP I Fine Art",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Fine Art",
    image: img,
  },
  {
    title: "RVSP II Fine Art",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Fine Art",
    image: img,
  },
  {
    title: "Junior Diploma in Fine Art (1st Year)",
    semester: "Semester 1 and 2",
    description:
      "Semester-I: History of Indian Art (From Prehistory to 6th Century AD), Fundamental of Art. Semester-II: Still Life, Internal/Sessional Works.",
    image: img,
  },
  {
    title: "Diploma in Fine Art (2nd Year)",
    semester: "Semester 1 and 2",
    description:
      "Semester-I: History of Indian Art (From Prehistory to 6th Century AD), Fundamental of Art. Semester-II: Landscape (Practical) or Clay Modelling, Internal/Sessional Works.",
    image: img,
  },
  {
    title: "Senior Diploma in Fine Art (3rd Year)",
    semester: "Semester 1 and 2",
    description:
      "Semester-I: History of Indian Art (From 7th Century AD to 18th Century AD), Fundamental of Art. Semester-II: Landscape II.",
    image: img,
  },
  {
    title: "Advance Diploma in Fine Art (4th Year)",
    semester: "Semester 1 and 2",
    description: "Semester-I: Head Study. Semester-II: Clay Modelling II.",
    image: img,
  },
  {
    title: "Under Graduate Diploma in Fine Art (5th Year)",
    semester: "Semester 1 and 2",
    description:
      "Semester-I: Appreciation and Fundamentals of Visual Arts. Semester-II: Drawing, Elective.",
    image: img,
  },
  {
    title: "Graduate Diploma in Fine Art (6th Year)",
    semester: "Semester 1 and 2",
    description:
      "Semester-I: Design-2D & 3D. Semester-II: Printmaking, Research Project.",
    image: img,
  },
  {
    title: "Post Graduate Diploma in Fine Art (7th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Fine Art",
    image: img,
  },
  {
    title: "Master Diploma in Fine Art (8th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Fine Art",
    image: img,
  },
  {
    title: "Training Diploma in Fine Art (9th Year)",
    semester: "Semester- I & Semester-II Fine Art",
    description: "Computer Fundamentals",
    image: img,
  },
  {
    title: "RVSP Commercial Art",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Commercial Art",
    image: img,
  },
  {
    title: "RVSP I Commercial Art",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Commercial Art",
    image: img,
  },
  {
    title: "RVSP II Commercial Art",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Commercial Art",
    image: img,
  },
  {
    title: "Diploma in Commercial Art (2nd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Commercial Art",
    image: img,
  },
  {
    title: "Senior Diploma in Commercial Art ( 3rd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Commercial Art",
    image: img,
  },
  {
    title: "Advance Diploma in Commercial Art (4th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Commercial Art",
    image: img,
  },
  {
    title: "Under Graduate Diploma in Commercial Art (5th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Commercial Art",
    image: img,
  },
  {
    title: "Junior Diploma in Commercial Art (1st Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Commercial Art",
    image: img,
  },
  {
    title: "Graduate Diploma in Commercial Art (6th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Commercial Art",
    image: img,
  },
  {
    title: "Post Graduate Diploma in Commercial Art (7th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Commercial Art",
    image: img,
  },
  {
    title: "Master Diploma in Commercial Art (8th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Commercial Art",
    image: img,
  },
  {
    title: "Teacher Training Diploma in Commercial Art (9th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Commercial Art",
    image: img,
  },
  {
    title: "RVSP Sculpture",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Sculpture",
    image: img,
  },
  {
    title: "RVSP I Sculpture",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Sculpture",
    image: img,
  },
  {
    title: "RVSP II Sculpture",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Sculpture",
    image: img,
  },
  {
    title: "Junior Diploma in Sculpture (1st Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Sculpture",
    image: img,
  },
  {
    title: "Diploma in Sculpture (2nd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Sculpture",
    image: img,
  },
  {
    title: "Senior Diploma in Sculpture (3rd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Sculpture",
    image: img,
  },
  {
    title: "Advance Diploma in Sculpture (4th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Sculpture",
    image: img,
  },
  {
    title: "Under Graduate Diploma in Sculpture (5th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Sculpture",
    image: img,
  },
  {
    title: "Graduate Diploma in Sculpture (6th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Sculpture",
    image: img,
  },
  {
    title: "Post Graduate Diploma in Sculpture (7th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Sculpture",
    image: img,
  },
  {
    title: "Master Diploma in Sculpture (8th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Sculpture",
    image: img,
  },
  {
    title: "Teacher Training Diploma in Sculpture (9th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Sculpture",
    image: img,
  },
  {
    title: "RVSP Kathak Dance",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Kathak Dance",
    image: img,
  },
  {
    title: "RVSP I Kathak Dance",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Kathak Dance",
    image: img,
  },
  {
    title: "RVSP II Kathak Dance",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Kathak Dance",
    image: img,
  },
  {
    title: "Junior Diploma in Kathak Dance (1st Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Kathak Dance",
    image: img,
  },
  {
    title: "Diploma in Kathak Dance (2nd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Kathak Dance",
    image: img,
  },
  {
    title: "Advance Diploma in Kathak Dance (4th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Kathak Dance",
    image: img,
  },
  {
    title: "Under Graduate Diploma in Kathak Dance (5th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Kathak Dance",
    image: img,
  },
  {
    title: "Graduate Diploma in Kathak Dance (6th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Kathak Dance",
    image: img,
  },
  {
    title: "Post Graduate Diploma in Kathak Dance (7th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Kathak Dance",
    image: img,
  },
  {
    title: "Master Diploma in Kathak Dance (8th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Kathak Dance",
    image: img,
  },
  {
    title: "Teacher Training Diploma in Kathak Dance (9th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Kathak Dance",
    image: img,
  },
  {
    title: "RVSP Bharat Natyam",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Bharat Natyam",
    image: img,
  },
  {
    title: "RVSP I Bharat Natyam",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Bharat Natyam",
    image: img,
  },
  {
    title: "RVSP II Bharat Natyam",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Bharat Natyam",
    image: img,
  },
  {
    title: "Junior Diploma in Bharat Natyam (1st Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Bharat Natyam",
    image: img,
  },
  {
    title: "Diploma in Bharat Natyam (2nd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Bharat Natyam",
    image: img,
  },
  {
    title: "Senior Diploma in Bharat Natyam (3rd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Bharat Natyam",
    image: img,
  },
  {
    title: "Advance Diploma in Bharat Natyam (4th Year)",
    semester: "Semester 1 and 2",
    description:
      "Semester-I: Color Concept, Creative Art, Handicraft. Semester-II: Painting, Sketching.",
    image: img,
  },
  {
    title: "Under Graduate Diploma in Bharat Natyam (5th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Bharat Natyam",
    image: img,
  },
  {
    title: "Graduate Diploma in Bharat Natyam 6th Year",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Bharat Natyam",
    image: img,
  },
  {
    title: "Post Graduate Diploma in Bharat Natyam (7th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Bharat Natyam",
    image: img,
  },
  {
    title: "Master Diploma in Bharat Natyam (8th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Bharat Natyam",
    image: img,
  },
  {
    title: "Teacher Training Diploma in Bharat Natyam (9th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Bharat Natyam",
    image: img,
  },
  {
    title: "Junior Diploma in Odissi Dance (1st Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Odissi Dance",
    image: img,
  },
  {
    title: "Diploma in Odissi Dance( 2nd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Odissi Dance",
    image: img,
  },
  {
    title: "Senior Diploma in Odissi Dance (3rd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Odissi Dance",
    image: img,
  },
  {
    title: "Advance Diploma in Odissi Dance (4th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Odissi Dance",
    image: img,
  },
  {
    title: "Under Graduate Diploma in Odissi Dance( 5th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Odissi Dance",
    image: img,
  },
  {
    title: "Graduate Diploma in Odissi Dance (6th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Odissi Dance",
    image: img,
  },
  {
    title: "Post Graduate Diploma in Odissi Dance (7th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Odissi Dance",
    image: img,
  },
  {
    title: "Master Diploma in Odissi Dance (8th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Odissi Dance",
    image: img,
  },
  {
    title: "TeacheR Training Diploma in Odissi Dance( 9th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Odissi Dance",
    image: img,
  },
  {
    title: "Junior Diploma in Kathakali Dance (1st Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Kathakali Dance",
    image: img,
  },
  {
    title: "Diploma in Kathakali Dance (2nd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Kathakali Dance",
    image: img,
  },
  {
    title: "Senior Diploma in Kathakali Dance (3rd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Kathakali Dance",
    image: img,
  },
  {
    title: "Advance Diploma in Kathakali Dance (4th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Kathakali Dance",
    image: img,
  },
  {
    title: "Under Graduate Diploma in Kathakali Dance (5th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Kathakali Dance",
    image: img,
  },
  {
    title: "Graduate Diploma in Kathakali Dance (6th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Kathakali Dance",
    image: img,
  },
  {
    title: "Master Diploma in Kathakali Dance (8th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Kathakali Dance",
    image: img,
  },
  {
    title: "Teacher Training Diploma in Kathakali Dance (9th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Kathakali Dance",
    image: img,
  },
  {
    title: "Junior Diploma in Manipuri Dance [1st Year]",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Manipuri Dance",
    image: img,
  },
  {
    title: "Diploma in Manipuri Dance [2nd Year]",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Manipuri Dance",
    image: img,
  },
  {
    title: "Diploma in Manipuri Dance [2nd Year]",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Manipuri Dance",
    image: img,
  },
  {
    title: "Under Graduate Diploma in Manipuri Dance [5th Year]",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Manipuri Dance",
    image: img,
  },
  {
    title: "Graduate Diploma in Manipuri Dance [6th Year]",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Manipuri Dance",
    image: img,
  },
  {
    title: "Post Graduate Diploma in Manipuri Dance [7th Year]",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Manipuri Dance",
    image: img,
  },
  {
    title: "Master Diploma in Manipuri Dance [8th Year]",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Manipuri Dance",
    image: img,
  },
  {
    title: "Teacher Training Diploma in Manipuri Dance (9th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Manipuri Dance",
    image: img,
  },
  {
    title: "Junior Diploma in Rabindra Nritya (1st Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Rabindra Nritya",
    image: img,
  },
  {
    title: "Diploma in Rabindra Nritya(2nd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Rabindra Nritya",
    image: img,
  },
  {
    title: "Senior Diploma in Rabindra Nritya (3rd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Rabindra Nritya",
    image: img,
  },
  {
    title: "Advance Diploma in Rabindra Nritya (4th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Rabindra Nritya",
    image: img,
  },
  {
    title: "Under Graduate Diploma in Rabindra Nritya (5th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Rabindra Nritya",
    image: img,
  },
  {
    title: "Graduate Diploma in Rabindra Nritya (6th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Rabindra Nritya",
    image: img,
  },
  {
    title: "Post Graduate Diploma in Rabindra Nritya (7th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Rabindra Nritya",
    image: img,
  },
  {
    title: "Master Diploma in Rabindra Nritya (8th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Rabindra Nritya",
    image: img,
  },
  {
    title: "Teacher Training Diploma in Rabindra Nritya (9th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Rabindra Nritya",
    image: img,
  },
  {
    title: "Diploma Programs in Professional Cooking",
    semester: "Semester 1 and 2",
    description: "Diploma Programs in Professional Cooking",
    image: img,
  },
  {
    title: "Dipolama in Journalism",
    semester: "Semester 1 and 2",
    description:
      "Semester-I: Communication and Mass Communication Concept and Process, History of Communication Media, Introduction to Journalism, Indian State and Democratic Policy. Semester-II: Indian Business and Economics, Media and Cultural Studies, Project Work.",
    image: img,
  },
  {
    title: "Junior Diploma in Drama (1st Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Drama",
    image: img,
  },
  {
    title: "Diploma in Western Dance (2nd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Western Dance",
    image: img,
  },
  {
    title: "Senior Diploma in Western Dance (3rd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Western Dance",
    image: img,
  },
  {
    title: "Advance Diploma in Western Dance (4th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Western Dance",
    image: img,
  },
  {
    title: "Under Graduate Diploma in Western Dance (5th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Western Dance",
    image: img,
  },
  {
    title: "Graduate Diploma in Western Dance (6th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Western Dance",
    image: img,
  },
  {
    title: "Post Graduate Diploma in Western Dance (7th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Western Dance",
    image: img,
  },
  {
    title: "Master Diploma in Western Dance (8th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Western Dance",
    image: img,
  },
  {
    title: "Teacher Training Diploma in Western Dance (9th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Western Dance",
    image: img,
  },
  {
    title: "Junior Diploma in Rabindra Sangeet (1st Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Rabindra Sangeet",
    image: img,
  },
  {
    title: "Diploma in Rabindra Sangeet (2nd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Rabindra Sangeet",
    image: img,
  },
  {
    title: "Senior Diploma in Rabindra Sangeet (3rd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Rabindra Sangeet",
    image: img,
  },
  {
    title: "Advance Diploma in Rabindra Sangeet (4th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Rabindra Sangeet",
    image: img,
  },
  {
    title: "Under Graduate Diploma in Rabindra Sangeet (5th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Rabindra Sangeet",
    image: img,
  },
  {
    title: "Graduate Diploma in Rabindra Sangeet (6th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Rabindra Sangeet",
    image: img,
  },
  {
    title: "Post Graduate Diploma in Rabindra Sangeet (7th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Rabindra Sangeet",
    image: img,
  },
  {
    title: "Master Diploma in Rabindra Sangeet (8th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Rabindra Sangeet",
    image: img,
  },
  {
    title: "Teacher Training Diploma in Rabindra Sangeet (9th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Classical Sangeet",
    image: img,
  },
  {
    title: "Junior Diploma in Classical Sangeet (1st Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Classical Sangeet",
    image: img,
  },
  {
    title: "Diploma in Classical Sangeet (2nd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Classical Sangeet",
    image: img,
  },
  {
    title: "Senior Diploma in Classical Sangeet (3rd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Classical Sangeet",
    image: img,
  },
  {
    title: "Advance Diploma in Classical Sangeet (4th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Classical Sangeet",
    image: img,
  },
  {
    title: "Under Graduate Diploma in Classical Sangeet (5th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Classical Sangeet",
    image: img,
  },
  {
    title: "Graduate Diploma in Classical Sangeet (6th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Classical Sangeet",
    image: img,
  },
  {
    title: "Post Graduate Diploma in Classical Sangeet (7th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Classical Sangeet",
    image: img,
  },
  {
    title: "Master Diploma in Classical Sangeet (8th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Classical Sangeet",
    image: img,
  },
  {
    title: "Teacher Training Diploma in Classical Sangeet (9th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Classical Sangeet",
    image: img,
  },
  {
    title: "Junior Diploma in Najarul Geeti (1st Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Najarul Geeti",
    image: img,
  },
  {
    title: "Diploma in Najarul Geeti (2nd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Najarul Geeti",
    image: img,
  },
  {
    title: "Senior Diploma in Najarul Geeti (3rd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Najarul Geeti",
    image: img,
  },
  {
    title: "Advance Diploma in Najarul Geeti (4th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Najarul Geeti",
    image: img,
  },
  {
    title: "Under Graduate Diploma in Najarul Geeti (5th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Najarul Geeti",
    image: img,
  },
  {
    title: "Graduate Diploma in Najarul Geeti (6th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Najarul Geeti",
    image: img,
  },
  {
    title: "Post Graduate Diploma in Najarul Geeti (7th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Najarul Geeti",
    image: img,
  },
  {
    title: "Master Diploma in Najarul Geeti (8th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Najarul Geeti",
    image: img,
  },
  {
    title: "Teacher Training Diploma in Najarul Geeti (9th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Najarul Geeti",
    image: img,
  },
  {
    title: "Junior Diploma in Bhab Sangeet (1st Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Bhab Sangeet",
    image: img,
  },
  {
    title: "Diploma in Bhab Sangeet (2nd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Bhab Sangeet",
    image: img,
  },
  {
    title: "Senior Diploma in Bhab Sangeet (3rd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Bhab Sangeet",
    image: img,
  },
  {
    title: "Advance Diploma in Bhab Sangeet (4th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Bhab Sangeet",
    image: img,
  },
  {
    title: "Under Graduate Diploma in Bhab Sangeet (5th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Bhab Sangeet",
    image: img,
  },
  {
    title: "Graduate Diploma in Bhab Sangeet (6th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Bhab Sangeet",
    image: img,
  },
  {
    title: "Post Graduate Diploma in Bhab Sangeet (7th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Bhab Sangeet",
    image: img,
  },
  {
    title: "Master Diploma in Bhab Sangeet (8th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Bhab Sangeet",
    image: img,
  },
  {
    title: "Teacher Training Diploma in Bhab Sangeet (9th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Bhab Sangeet",
    image: img,
  },
  {
    title: "Junior Diploma in Recitation (1st Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Recitation",
    image: img,
  },
  {
    title: "Diploma in Recitation (2nd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Recitation",
    image: img,
  },
  {
    title: "Senior Diploma in Recitation (3rd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Recitation",
    image: img,
  },
  {
    title: "Advance Diploma in Recitation (4th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Recitation",
    image: img,
  },
  {
    title: "Under Graduate Diploma in Recitation (5th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Recitation",
    image: img,
  },
  {
    title: "Graduate Diploma in Recitation (6th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Recitation",
    image: img,
  },
  {
    title: "Post Graduate Diploma in Recitation (7th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Recitation",
    image: img,
  },
  {
    title: "Master Diploma in Recitation (8th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Recitation",
    image: img,
  },
  {
    title: "Teacher Training Diploma in Recitation (9th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Recitation",
    image: img,
  },
  {
    title: "Junior Diploma in Tabla (1st Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Tabla",
    image: img,
  },
  {
    title: "Diploma in Tabla (2nd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Tabla",
    image: img,
  },
  {
    title: "Senior Diploma in Tabla (3rd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Tabla",
    image: img,
  },
  {
    title: "Advance Diploma in Tabla (4th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Tabla",
    image: img,
  },
  {
    title: "Under Graduate Diploma in Tabla (5th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Tabla",
    image: img,
  },
  {
    title: "Graduate Diploma in Tabla (6th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Tabla",
    image: img,
  },
  {
    title: "Post Graduate Diploma in Tabla (7th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Tabla",
    image: img,
  },
  {
    title: "Master Diploma in Tabla [8th Year]",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Tabla",
    image: img,
  },
  {
    title: "Teacher Training Diploma in Tabla (9th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Tabla",
    image: img,
  },
  {
    title: "Diploma in Guitar (2nd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Guitar",
    image: img,
  },
  {
    title: "Senior Diploma in Guitar (3rd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Guitar",
    image: img,
  },
  {
    title: "Advance Diploma in Guitar (4th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Guitar",
    image: img,
  },
  {
    title: "Under Graduate Diploma in Guitar (5th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Guitar",
    image: img,
  },
  {
    title: "Graduate Diploma in Guitar (6th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Guitar",
    image: img,
  },
  {
    title: "Post Graduate Diploma in Guitar (7th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Guitar",
    image: img,
  },
  {
    title: "Master Diploma in Guitar (8th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Guitar",
    image: img,
  },
  {
    title: "Junior Diploma in Pakhwaj (1st Year))",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Pakhwaj",
    image: img,
  },
  {
    title: "Diploma in Pakhwaj (2nd Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Pakhwaj",
    image: img,
  },
  {
    title: "Senior Diploma in Pakhwaj [3rd Year]",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Pakhwaj",
    image: img,
  },
  {
    title: "Advance Diploma in Pakhwaj [4th Year]",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Pakhwaj",
    image: img,
  },
  {
    title: "Under Graduate Diploma in Pakhwaj (5th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Pakhwaj",
    image: img,
  },
  {
    title: "Graduate Diploma in Pakhwaj (6th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Pakhwaj",
    image: img,
  },
  {
    title: "Post Graduate Diploma in Pakhwaj (7th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Pakhwaj",
    image: img,
  },
  {
    title: "Master Diploma in Pakhwaj (8th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Pakhwaj",
    image: img,
  },
  {
    title: "Teacher Training Diploma in Pakhwaj (9th Year)",
    semester: "Semester 1 and 2",
    description: "Semester- I & Semester-II Pakhwaj",
    image: img,
  },

  {
    title: "Junior Diploma in Sitar (1st Year)",
    semester: "Semester 1 and 2",
    description: "Semester-I & Semester-II, Sitar",
    image: img,
  },
  {
    title: "Diploma in Sitar (2nd Year)",
    semester: "Semester 1 and 2",
    description: "Semester-I & Semester-II, Sitar",
    image: img,
  },
  {
    title: "Senior Diploma in Sitar (3rd Year)",
    semester: "Semester 1 and 2",
    description: "Semester-I & Semester-II, Sitar",
    image: img,
  },
  {
    title: "Advance Diploma in Sitar (4th Year)",
    semester: "Semester 1 and 2",
    description: "Semester-I & Semester-II, Sitar",
    image: img,
  },
  {
    title: "Under Graduate Diploma in Sitar (5th Year)",
    semester: "Semester 1 and 2",
    description: "Semester-I & Semester-II, Sitar",
    image: img,
  },
  {
    title: "Graduate Diploma in Sitar (6th Year)",
    semester: "Semester 1 and 2",
    description: "Semester-I & Semester-II, Sitar",
    image: img,
  },
  {
    title: "Post Graduate Diploma in Sitar (7th Year)",
    semester: "Semester 1 and 2",
    description: "Semester-I & Semester-II, Sitar",
    image: img,
  },
  {
    title: "Master Diploma in Sitar (8th Year)",
    semester: "Semester 1 and 2",
    description: "Semester-I & Semester-II, Sitar",
    image: img,
  },
  {
    title: "Teacher Training Diploma in Sitar (9th Year)",
    semester: "Semester 1 and 2",
    description: "Semester-I & Semester-II, Sitar",
    image: img,
  },
  {
    title: "Junior Diploma in Sarode (1st Year)",
    semester: "Semester 1 and 2",
    description: "Semester-I & Semester-II, Sarode",
    image: img,
  },
  {
    title: "Diploma in Sarode (2nd Year)",
    semester: "Semester 1 and 2",
    description: "Semester-I & Semester-II, Sarode",
    image: img,
  },
  {
    title: "Senior Diploma in Sarode (3rd Year)",
    semester: "Semester 1 and 2",
    description: "Semester-I & Semester-II, Sarode",
    image: img,
  },
  {
    title: "Advance Diploma in Sarode (4th Year)",
    semester: "Semester 1 and 2",
    description: "Semester-I & Semester-II, Sarode",
    image: img,
  },
  {
    title: "Under Graduate Diploma in Sarode (5th Year)",
    semester: "Semester 1 and 2",
    description: "Semester-I & Semester-II, Sarode",
    image: img,
  },
  {
    title: "Graduate Diploma in Sarode (6th Year)",
    semester: "Semester 1 and 2",
    description: "Semester-I & Semester-II, Sarode",
    image: img,
  },
  {
    title: "Post Graduate Diploma in Sarode (7th Year)",
    semester: "Semester 1 and 2",
    description: "Semester-I & Semester-II, Sarode",
    image: img,
  },
];

export function Twelve() {
  // Styles for gallery
  const galleryStyles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "16px",
    padding: "16px",
  };

  return (
    <Box sx={{ padding: { xs: "8px", sm: "16px", md: "16px" } }}>
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        sx={{ textAlign: "center", fontSize: "3rem" }}
      >
        Our Courses
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ textAlign: "center", marginBottom: "16px" }}
      >
        We have selected all the courses ideally for the student for their
        better improvement in technical career prospect.
      </Typography>

      <Box sx={galleryStyles}>
        {courseData.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            semester={course.semester}
            description={course.description}
            image={course.image}
            sx={{
              width: { xs: "100%", sm: "45%", md: "30%" },
              maxWidth: "300px",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Twelve;
