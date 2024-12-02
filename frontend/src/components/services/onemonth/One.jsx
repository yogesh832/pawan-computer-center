import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OneCard from "./OneCard"; // Correct import path
import img from "../../../assets/Images/books.jpg"; // Ensure path is correct

// Course data
const courseData = [
  {
    title: "CERTIFICATE IN FUNDAMENTAL",
    semester: "Semester 1",
    description: "Computer Fundamentals",
    image: img,
  },
  {
    title: "CERTIFICATE IN MS WORD",
    semester: "Semester 1",
    description: "MS WORD",
    image: img,
  },
  {
    title: "CERTIFICATE IN MS EXCEL",
    semester: "Semester 1",
    description: "MS EXCEL",
    image: img,
  },
  {
    title: "CERTIFICATE IN MS POWER POINT",
    semester: "Semester 1",
    description: "MS POWER POINT",
    image: img,
  },
];

export function One() {
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
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center",
        }}
      >
        {courseData.map((course, index) => (
          <OneCard
            key={index}
            title={course.title}
            semester={course.semester}
            description={course.description}
            image={course.image}
          />
        ))}
      </Box>
    </Box>
  );
}

export default One;
