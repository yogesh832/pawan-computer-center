import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // Default theme
import '@splidejs/react-splide/css/core'; // Core styles
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const courses = [
  { duration: '1 Month', features: ['Basic content access', 'Community support','Access to Q&A sessions'], link: '/one' },
  { duration: '3 Months', features: ['Premium content', 'Access to Q&A sessions', 'Exclusive webinars'], link: '/three' },
  { duration: '6 Months', features: ['All Premium content', '1-on-1 mentoring', 'Project reviews'], link: '/six' },
  { duration: '12 Months', features: ['Full Course Access', 'All mentoring', 'Unlimited reviews'], link: '/twelve' },
  { duration: '18 Months', features: ['Extended support', 'Priority content', 'Unlimited mentorship'], link: '/eighteen' },
  { duration: '24 Months', features: ['Lifetime Access', 'Priority Q&A', 'Exclusive content'], link: '/twentyfour' }
];

const CourseCarousel = () => {
  return (
    <div className="flex items-center justify-center">
      {/* Container for the carousel */}
      <div className="w-full lg:w-3/4 xl:w-2/3">
        {/* Splide component with configuration options */}
        <Splide
          options={{
            type: 'loop', // Infinite looping
            perPage: 3, // Number of items visible per page (adjust for smaller screens)
            perMove: 1, // Move one slide at a time
            rewind: true, // Rewind when reaching the end
            pagination: false, // Disable pagination dots
            gap: '1rem', // Space between slides
            arrows: true, // Show navigation arrows
            autoplay: true, // Enable auto-scrolling
            interval: 3000, // 3 seconds auto-scroll
            pauseOnHover: true, // Pause on hover
          }}
        >
          {courses.map((course, index) => (
            <SplideSlide key={index}>
              <div className="p-4 bg-white border rounded-md shadow-lg hover:shadow-2xl transition-all duration-300">
                <h3 className="text-lg font-semibold text-center">{course.duration}</h3>
                <ul className="mt-2 text-center">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600">• {feature}</li>
                  ))}
                </ul>
                <Link to={course.link} className="inline-block mt-4 text-blue-500 hover:text-blue-700">
                  Learn More
                </Link>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default CourseCarousel;
