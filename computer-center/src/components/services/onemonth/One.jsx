import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CourseCard } from '../CourseCard.jsx';
import img from '../../../assets/Images/books.jpg';




const courseData = [
    {
        title: "Certificate in Fundamental",
        semester: "Semester: I",
        description: "Computer Fundamentals, Dreamweaver",
        image: img
    },
    {
        title: "Advanced Web Development",
        semester: "Semester: II",
        description: "JavaScript, React, Node.js",
        image: img
    },
    {
        title: "Data Science Bootcamp",
        semester: "Semester: III",
        description: "Python, Machine Learning, Data Analysis",
        image: img
    }
];

export function One() {

    const galleryStyles = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '16px', 
        padding: '16px' }

    return (
        <div className="container">
            <Typography variant="h1" component="h1" gutterBottom>
                Our Courses
            </Typography>
            <Typography variant="body1" paragraph>
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
                    />
                ))}
            </Box>
        </div>
    );
}