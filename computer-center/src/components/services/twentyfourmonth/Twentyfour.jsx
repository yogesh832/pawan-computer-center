import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CourseCard } from '../CourseCard.jsx';
import img from '../../../assets/Images/books.jpg';

// Course data
const courseData = [
    {
        title: "POST GRADUATE DIPLOMA IN INFORMATION TECHNOLOGY",
        semester: "Semester 1",
        description: "SEM-I: Fundamentals of Computers, Windows XP/Vista/7/8, MS Office 2010 (Word, Excel, Access, PowerPoint), Internet, PageMaker, Corel Draw, Photoshop, English Typing, Accounting Concept, Tally; SEM-II: Website Designing, HTML, DHTML, XML, JavaScript, Visual Basic, Compute.",
        image: img
    },
    {
        title: "POST GRADUATE DIPLOMA IN COMPUTER TEACHER TRAINING",
        semester: "Semester 1",
        description: "SEM-I: Fundamentals of Computers, Windows XP/Vista/7/8, MS Office 2010 (Word, Excel, Access, PowerPoint), Internet, PageMaker, Corel Draw, Photoshop, English & Regional Typing; SEM-II: Accounting Concept, Tally, Programming Language C, Java, Micro Teaching, Office Record Management.",
        image: img
    },
    {
        title: "ADVANCE DIPLOMA IN COMPUTER HARDWARE & NETWORKING ENGINEERING",
        semester: "Semester 1",
        description: "SEMESTER-I: Computer Fundamentals, Basic Organization, Introduction to Microprocessor, ALU and Control, Memory, Computer Software and Windows, MS Office (Word, Excel, PowerPoint); SEMESTER-II: Basic Electronics & Measuring Instruments, Operating System, Architecture of System, PC Assembling, LAN & Networking, etc.",
        image: img
    },
    {
        title: "ADVANCE DIPLOMA IN INFORMATION TECHNOLOGY",
        semester: "Semester 1",
        description: "SEM-I: Fundamentals of Computers, Windows XP/Vista/7/8, MS Office 2010 (Word, Excel, Access, PowerPoint), Internet, PageMaker, Corel Draw, Photoshop, English Typing, Accounting Concept, Tally; SEM-II: Website Designing, HTML, DHTML, XML, JavaScript, Visual Basic, Computer.",
        image: img
    },
    {
        title: "Diploma in Computer Application",
        semester: "Semester 1",
        description: "SEM-I: Fundamentals of Computers, Windows XP/Vista/7/8, MS Office 2010 (Word, Excel, Access, PowerPoint), Internet, PageMaker, Corel Draw, Photoshop, English Typing, Accounting Concept, Tally; SEM-II: Website Designing, HTML, DHTML, XML, JavaScript, Visual Basic, Computer.",
        image: img
    },
    {
        title: "ADVANCE DIPLOMA IN FINANCIAL ACCOUNTING",
        semester: "Semester 1",
        description: "YEAR-1: Computer Fundamentals, Windows, MS Office 2007 (Word, Excel, PowerPoint, Access); YEAR-2: Accounting Concept, Tally ERP9, Other Accounting Packages, Internet, Project Work.",
        image: img
    },
    {
        title: "ADVANCE DIPLOMA IN NURSERY TEACHER TRAINNING",
        semester: "Semester 1",
        description: "1st YEAR: PRINCIPLES OF EDUCATION, BASIC NETWORKING SKILLS, EDUCATIONAL PSYCHOLOGY, TEACHING METHODS & MATERIALS; 2nd YEAR: SCHOOL ORGANIZATION, CHILD PSYCHOLOGY & HEALTH, EDUCATION SYSTEM OF INDIA, BASIC COMPUTER AND COMMUNICATION ENGLISH.",
        image: img
    },
    {
        title: "Diploma in Yoga",
        semester: "Semester 1",
        description: "1st Year: Fundamentals of Yoga, Principles of Raj Yoga & Hath Yoga, Practices of Contemporary Yogies & Alternative Therapy Methods, Anatomy, Physiology & Related Disorders, Yoga Practical I, Yoga Practical II; 2nd Year: Life Management (Creative Excellence), Human Consciousness & Yoga Therapy, Yoga Therapy, Hygiene, Diet & Naturopathy, Acupressure.",
        image: img
    },{
        title: "Diploma Programs in Professional Cooking",
        semester: "Semester 1",
        description: "Diploma Programs in Professional Cooking",
        image: img
    },
    {
        title: "Advance Diploma in Barbering",
        semester: "Semester 1",
        description: "Advance Diploma in Barbering",
        image: img
    },
    {
        title: "Diploma in Cooking",
        semester: "Semester 1",
        description: "Diploma in Cooking",
        image: img
    },
    {
        title: "UNDER GRADUATE DIPLOMA IN FASHION DESIGNING",
        semester: "Semester 1",
        description: "1ST YEAR: Fashion Designing, Fashion Accessory, Textile Science, Pattern Making and Garment Construction, Fashion Merchandising and Management; 2ND YEAR: Fashion Illustration, Fashion Ornamentation, Product Specification, Computer-Aided Design, Fashion Marketing and Management.",
        image: img
    },
    {
        title: "ADVANCE DIPLOMA IN BEAUTICIAN",
        semester: "Semester 1",
        description: "",
        image: img
    },{
        title: "Diploma Retail Management",
        semester: "Semester 1",
        description: "",
        image: img
    }
];

export function Twentyfour() {
    // Styles for gallery
    const galleryStyles = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '16px',
        padding: '16px',
       
    };

    return (
        <Box sx={{ padding: { xs: '8px', sm: '16px', md: '16px' } }}>
            <Typography variant="h1" component="h1" gutterBottom sx={{ textAlign: 'center', fontSize:'3rem' }}>
                Our Courses
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: 'center', marginBottom: '16px' }}>
                We have selected all the courses ideally for the student for their better improvement in technical career prospect.
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
                            width: { xs: '100%', sm: '45%', md: '30%' },
                             maxWidth: '300px' 
                             }}
                    />
                ))}
            </Box>
        </Box>
    );
}
export default Twentyfour;