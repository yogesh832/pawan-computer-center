import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CourseCard } from '../CourseCard.jsx';
import img from '../../../assets/Images/books.jpg';

// Course data
const courseData = [
    {
        title: "CERTIFICATE IN COMPUTER BASIC",
        semester: "Semester 1",
        description: " Computer Fundamentals Windows 7 Ms Office Internet",
        image: img
    },
    {
        title: "CERTIFICATE IN COMPUTER CONCEPTS",
        semester: "Semester 1",
        description: "Computer Fundamentals Ms Office Internet",
        image: img
    },
    {
        title: "DIPLOMA IN COMPUTER APPLICATION",
        semester: "Semester 1",
        description: "Computer Fundamentals Windows 7 Ms Office Internet",
        image: img
    },
    {
        title: "CERTIFICATE IN SPOKEN ENGLISH",
        semester: "Semester 1",
        description: "Computer Fundamentals Spoken English",
        image: img
    },
    {
        title: "CERTIFICATE IN ENGLISH TYPING",
        semester: "Semester 1",
        description: "Computer fundamentals English typing",
        image: img
    },
    {
        title: "CERTIFICATE IN HINDI TYPING",
        semester: "Semester 1",
        description: "Computer fundamentals Hindi Typing using Hindi Font.",
        image: img
    },
    {
        title: "CERTIFICATE IN TALLY",
        semester: "Semester 1",
        description: "Computer Fundamentals Tally ERP 9",
        image: img
    },
    {
        title: "DIPLOMA IN COMPUTER APPLICATION",
        semester: "Semester 1",
        description: "Computer Fundamentals Windows 7 Ms Office Internet",
        image: img
    },
    {
        title: "CERTIFICATE IN INTERNET",
        semester: "Semester 1",
        description: "Computer Fundamentals Internet.",
        image: img
    },
    {
        title: "CERTIFICATE IN PAGEMAKER",
        semester: "Semester 1",
        description: "Computer Fundamentals PageMaker.",
        image: img
    },
    {
        title: "CERTIFICATE IN QUARKXPRESS",
        semester: "Semester 1",
        description: "Computer Fundamentals QuarkXPress.",
        image: img
    },
    {
        title: "CERTIFICATE IN AFTER EFFECTS",
        semester: "Semester 1",
        description: "Computer Fundamentals After Effects.",
        image: img
    },
    {
        title: "CERTIFICATE IN COREL DRAW",
        semester: "Semester 1",
        description: "Computer Fundamentals Corel Draw.",
        image: img
    },
    {
        title: "CERTIFICATE IN ADOBE PREMIERE PRO",
        semester: "Semester 1",
        description: "Computer Fundamentals Adobe Premiere Pro",
        image: img
    },
    {
        title: "CERTIFICATE IN 3D STUDIO MAX",
        semester: "Semester 1",
        description: "Computer Fundamentals 3d Studio max.",
        image: img
    },
    {
        title: "CERTIFICATE IN SOUND FORGE",
        semester: "Semester 1",
        description: "Sound Forge.",
        image: img
    },
    {
        title: "CERTIFICATE IN FLASH",
        semester: "Semester 1",
        description: "Computer Fundamentals Sound Forge..",
        image: img
    },
    {
        title: "CERTIFICATE IN DREAMWEAVER",
        semester: "Semester 1",
        description: "Computer Fundamentals  Dreamweaver",
        image: img
    },
    {
        title: "CERTIFICATE IN ASP.NET, ADO.NET",
        semester: "Semester 1",
        description: "Computer Fundamentals Asp.Net, ADO. Net.",
        image: img
    },
    {
        title: "CERTIFICATE IN C",
        semester: "Semester 1",
        description: "Computer Fundamentals Programming C",
        image: img
    },
    {
        title: "CERTIFICATE IN C ++",
        semester: "Semester 1",
        description: "Computer Fundamentals Sound Forge..",
        image: img
    },
    {
        title: "CERTIFICATE IN FLASH",
        semester: "Semester 1",
        description: "Computer Fundamentals C++, Oops",
        image: img
    },
    {
        title: "CERTIFICATE IN FOXPRO",
        semester: "Semester 1",
        description: "Computer Fundamentals FoxPro",
        image: img
    },
    {
        title: "CERTIFICATE IN PHOTOSHOP",
        semester: "Semester 1",
        description: "Computer Fundamentals Photoshop",
        image: img
    },
    {
        title: "CERTIFICATE IN ADOBE InDesign",
        semester: "Semester 1",
        description: "Computer Fundamentals  Adobe InDesign",
        image: img
    },
    {
        title: "CERTIFICATE IN ILLUSTRATOR",
        semester: "Semester 1",
        description: "Computer Fundamentals Adobe Illustrator",
        image: img
    },
    {
        title: "CERTIFICATE IN DATA STRUCTURE",
        semester: "Semester 1",
        description: "Computer Fundamentals Data Structure.",
        image: img
    },
    {
        title: "CERTIFICATE IN AJAX",
        semester: "Semester 1",
        description: "Computer Fundamentals Ajax",
        image: img
    },
    {
        title: "CERTIFICATE IN HTML",
        semester: "Semester 1",
        description: "Computer Fundamentals HTML",
        image: img
    },
    {
        title: "CERTIFICATE IN VISUAL BASIC",
        semester: "Semester 1",
        description: "Computer Fundamentals Visual Basic.",
        image: img
    },
    {
        title: "CERTIFICATE IN SERVLET, JSP, JDBC",
        semester: "Semester 1",
        description: "Computer Fundamentals Servlet,JSP,JDBC.",
        image: img
    },
    {
        title: "CERTIFICATE IN PC MAINTENANCE",
        semester: "Semester 1",
        description: "Computer Fundamentals Constriction & Functioning of different PC parts Monitor,Mother Board,Hard Disk,CD-ROM etc.Software Installation.",
        image: img
    },
    {
        title: "CERTIFICATE IN LINUX",
        semester: "Semester 1",
        description: "Computer Fundamentals Linux",
        image: img
    },
    {
        title: "CERTIFICATE IN CERTIFICATE IN AUTOCAD [2D & 3D]",
        semester: "Semester 1",
        description: "Computer Fundamentals Auto CAD",
        image: img
    },
    {
        title: "CERTIFICATE IN CORE JAVA",
        semester: "Semester 1",
        description: "Computer Fundamentals Core Java.",
        image: img
    },
    {
        title: "CERTIFICATE IN MYSQL",
        semester: "Semester 1",
        description: "Computer Fundamentals  MYSQL.",
        image: img
    },
    {
        title: "CERTIFICATE IN PHP",
        semester: "Semester 1",
        description: "Computer Fundamentals PHP.",
        image: img
    },
    {
        title: "CERTIFICATE IN ENGLISH & REGIONAL LANGUAGE TYPING",
        semester: "Semester 1",
        description: "Computer Fundamentals English Typing (39wpm),Hindi Typing (32wpm) using Hindi Font.",
        image: img
    },
    {
        title: "CERTIFICATE IN DATA ENTRY OPERATOR",
        semester: "Semester 1",
        description: "Computer Fundamentals Windows 7, Ms Office 2010English Typing,Internet.",
        image: img
    },
    {
        title: "CERTIFICATE IN DOTNET PROGRAMMING",
        semester: "Semester 1",
        description: "PROGRAMMING IN C,C++,C#.NET,VB.NET,ASP.NET,SQL SERVER 2008.",
        image: img
    },
    {
        title: "Advanced Level Graphic Design",
        semester: "Semester 1",
        description: "Adobe Photoshop,Adobe IllustratorAdobe InDesign",
        image: img
    },
    {
        title: "Advanced Level Video Production",
        semester: "Semester 1",
        description: "Adobe Premiere Pro,Adobe Audition",
        image: img
    },
    {
        title: "CERTIFICATE IN EXCEL",
        semester: "Semester 1",
        description: "Computer Fundamentals Ms Office Excel 2007",
        image: img
    },
    {
        title: "CERTIFICATE IN BREAD CRAFTING",
        semester: "Semester 1",
        description: "Flowers,Key Holder,Doll And Others.",
        image: img
    },
    {
        title: "CERTIFICATE IN SOFT TOYS MAKING",
        semester: "Semester 1",
        description: "Teddy,Teddy Pillow, Love Bears,Freeze And Phone Covers,Bags,Car Hangings,Cushion,Bugs Bunny Etc.",
        image: img
    },
    {
        title: "CERTIFICATE IN FLOWER MAKING",
        semester: "Semester 1",
        description: "Stoking Flowers,Ribbon Flowers,Flower With Paper,Flower With Wool Glitter Flower,Board Decoration Etc.",
        image: img
    },
    {
        title: "CERTIFICATE IN PARAFINE WORKS",
        semester: "Semester 1",
        description: "Basic Course of English Basic Conversation & Translation. Language,Reading,Writing,Basic Vocabulary,",
        image: img
    },
    {
        title: "CERTIFICATE IN MAKEUP ARTIST",
        semester: "Semester 1",
        description: "Professional Makeup,H.D. and Non H.D Makeup,Party Makeup,Personal Grooming",
        image: img
    },
    {
        title: "CERTIFICATE IN ARTS & CRAFT",
        semester: "Semester 1",
        description: "Fabric painting,Aari WorkGlass Painting,Handmade Jewelry ,Painting, Quilling Craft Recycled,Craft Soft Toys Engraving Work",
        image: img
    },
    {
        title: "CERTIFICATE IN MEHANDI ART",
        semester: "Semester 1",
        description: " Designing in Mehandi",
        image: img
    },
    {
        title: "CERTIFICATE COURSE IN REVIT ARCHITECTURE",
        semester: "Semester 1",
        description: " Introduction to Basic BIM & Revit Architecture,Place & Modify Walls,Add & Modify wall Profiles,Place Doors, Windows & Components,Dimensioning, Create Floors & Ceilings,Curtain Walls & Stairs,Basic Conceptual Modeling,Annotation & Schedules,Basic Structural Elements,Schedules, Sheets & Title Blocks,Views, Camera , Walk through",
        image: img
    },
    {
        title: "CERTIFICATE IN VERTICAL MACHINING CENTERS PROGRAMMING & OPERATING",
        semester: "Semester 1",
        description: "Explanation of Basic Safety Functions,Machine Components & Their Functions,Basic PRO 6 Screen Navigation,Coordinate Systems,Setting Work Coordinate Offsets,Tools & Tool Offsets,Program Management & Editing,Malfunction Prevention & Program Recovery,Tool Monitoring.",
        image: img
    },
    {
        title: "CERTIFICATE IN DOLLS MAKING",
        semester: "Semester 1",
        description: "Various Types of Dolls Making.",
        image: img
    },
    {
        title: "CERTIFICATE IN COMPUTER NUMERICAL CONTROL PROGRAMMER & OPERATOR",
        semester: "Semester 1",
        description: "Fundamentals of Numerical Control,Working Principle of CNC machines,Control Panel,Axis of Motion Programmer Structure G-Code,M- Code CNC Parts,Programming and Operating.",
        image: img
    },


    
];

export function Three() {
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
