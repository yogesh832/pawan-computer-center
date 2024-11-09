import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CourseCard } from "../CourseCard.jsx";
import img from "../../../assets/Images/books.jpg";

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

export default One;
