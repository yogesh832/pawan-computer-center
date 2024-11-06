import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import { Link } from 'react-router-dom';

const courses = [
  { duration: '1 Month', features: ['Basic content access', 'Community support', 'Access to Q&A sessions'], link: '/one' },
  { duration: '3 Months', features: ['Premium content', 'Access to Q&A sessions', 'Exclusive webinars'], link: '/three' },
  { duration: '6 Months', features: ['All Premium content', '1-on-1 mentoring', 'Project reviews'], link: '/six' },
  { duration: '12 Months', features: ['Full Course Access', 'All mentoring', 'Unlimited reviews'], link: '/twelve' },
  { duration: '18 Months', features: ['Extended support', 'Priority content', 'Unlimited mentorship'], link: '/eighteen' },
  { duration: '24 Months', features: ['Lifetime Access', 'Priority Q&A', 'Exclusive content'], link: '/twentyfour' }
];

const CourseCarousel = () => {
  return (
    <div className="flex items-center justify-center px-4 min-h-full">
      <div className="w-full lg:w-[89%] xl:w-2/3 min-h-full">
        <Splide
          options={{
            type: 'loop',
            perMove: 1,
            rewind: true,
            pagination: true,
            gap: '1rem',
            arrows: true,
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            fixedHeight: '20rem', // Base height for screens
            breakpoints: {
              480: {
                perPage: 1,
                gap: '0.5rem',
                arrows: false,
                pagination: true,
                fixedHeight: '16rem',
              },
              640: {
                perPage: 1,
                gap: '0.5rem',
                arrows: false,
                pagination: true,
                fixedHeight: '18rem',
              },
              768: {
                perPage: 2,
                gap: '0.75rem',
                arrows: true,
                fixedHeight: '20rem',
              },
              1024: {
                perPage: 3,
                gap: '1rem',
                fixedHeight: '20rem',
              },
              1280: {
                perPage: 4,
                gap: '1.5rem',
                fixedHeight: '22rem',
              },
              1920: {
                perPage: 5,
                gap: '1.5rem',
                fixedHeight: '24rem',
              },
              2560: {
                perPage: 6,
                gap: '2rem',
                fixedHeight: '26rem',
              },
              3840: {
                perPage: 7,
                gap: '2.5rem',
                fixedHeight: '28rem',
              },
            },
          }}
        >
          {courses.map((course, index) => (
            <SplideSlide key={index} style={{ height: '20rem' }}>
              <div className="h-full p-4 bg-white border rounded-md shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-lg font-semibold text-center">{course.duration}</h3>
                  <ul className="mt-2 text-center">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-gray-600">• {feature}</li>
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
