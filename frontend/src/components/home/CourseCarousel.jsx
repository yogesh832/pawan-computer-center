import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import { Link } from "react-router-dom";

const courses = [
  {
    duration: "1 Month",
    features: [
      "Basic content access",
      "Community support",
      "Access to Q&A sessions",
    ],
    link: "/one",
  },
  {
    duration: "3 Months",
    features: [
      "Premium content",
      "Access to Q&A sessions",
      "Exclusive webinars",
    ],
    link: "/three",
  },
  {
    duration: "6 Months",
    features: ["All Premium content", "1-on-1 mentoring", "Project reviews"],
    link: "/six",
  },
  {
    duration: "12 Months",
    features: ["Full Course Access", "All mentoring", "Unlimited reviews"],
    link: "/twelve",
  },
  {
    duration: "18 Months",
    features: ["Extended support", "Priority content", "Unlimited mentorship"],
    link: "/eighteen",
  },
  {
    duration: "24 Months",
    features: ["Lifetime Access", "Priority Q&A", "Exclusive content"],
    link: "/twentyfour",
  },
];

const CourseCarousel = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="w-full lg:w-3/4 xl:w-2/3">
        <Splide
          options={{
            type: "loop",
            perMove: 1,
            rewind: true,
            pagination: true,
            gap: "1rem",
            arrows: true,
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            breakpoints: {
              480: {
                // Very small screens
                perPage: 1,
                gap: "0.5rem",
                arrows: false,
                pagination: true,
                fixedHeight: "16rem",
              },
              640: {
                // Mobile devices
                perPage: 1,
                gap: "0.5rem",
                arrows: false,
                pagination: true,
                fixedHeight: "20rem",
              },
              768: {
                // Tablets
                perPage: 2,
                gap: "0.75rem",
                arrows: true,
                fixedHeight: "20rem",
              },
              1024: {
                // Laptops
                perPage: 3,
                gap: "1rem",
                fixedHeight: "20rem",
              },
              1280: {
                // Desktops
                perPage: 4,
                gap: "1.5rem",
                fixedHeight: "20rem",
              },
              1920: {
                // Full HD displays
                perPage: 5,
                gap: "1.5rem",
                fixedHeight: "20rem", // Slightly taller for full HD
              },
              2560: {
                // 2K displays
                perPage: 6,
                gap: "2rem",
                fixedHeight: "20rem", // Adjust for 2K
              },
              3840: {
                // 4K displays
                perPage: 7,
                gap: "2.5rem",
                fixedHeight: "20rem", // Larger height for 4K displays
              },
            },
          }}
        >
          {courses.map((course, index) => (
            <SplideSlide className="min-h-full" key={index}>
              <div className="p-4 h-64 sm:h-72 bg-white border rounded-md shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-full">
                <div>
                  <h3 className="text-sm sm:text-lg font-semibold text-center">
                    {course.duration}
                  </h3>
                  <ul className="mt-2 text-center">
                    {course.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-gray-600"
                      >
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <Link
                    to={course.link}
                    className="mt-4 inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-500 text-white text-xs sm:text-sm rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default CourseCarousel;
