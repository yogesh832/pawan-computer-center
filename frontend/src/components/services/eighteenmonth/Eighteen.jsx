import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CourseCard } from "../CourseCard.jsx";
import img from "../../../assets/Images/books.jpg";

// Course data
const courseData = [
  {
    title: "ADVANCE DIPLOMA IN COMPUTER APPLICATION",
    semester: "Semester 1",
    description:
      "SEMESTER-I: Computer Fundamentals, DOS, Window, MS Office 2010 (Word, Excel, PowerPoint, Access), English Typing (38WPM), Hindi Typing (30WPM), Tally ERP9; SEMESTER-II: Photoshop, Pagemaker, HTML, C, C++, CSS, Internet.",
    image: img,
  },
  {
    title: "Master Diploma in Computer information",
    semester: "Semester 1",
    description:
      "MSEMESTER-I: Computer Fundamentals, Window, MS Office 2010, English Typing, Punjabi/Hindi Typing, Tally ERP9 / Tally Prime; SEMESTER-II: Photoshop, HTML, C, C++, Corel Draw, Macromedia Flash, Internet.",
    image: img,
  },
  {
    title: "ADVANCE DIPLOMA IN BEAUTICIAN",
    semester: "Semester 1",
    description:
      "SEMESTER-I: Grooming, Hygiene & Safety, Basic Haircuts, Hair Spa & Hair Treatments, Treatments for Hair Fall and Dandruff, Massage Manipulation; SEMESTER-II: Perm, Hair Spa/Hair Oil Massage, Keratin, Understanding Skin Type & Analysis, Grey Coverage and Root Touchups.",
    image: img,
  },
];

export function Eighteen() {
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

export default Eighteen;
