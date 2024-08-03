import React from 'react';
import styles from './InfoSections.module.css';
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";

const InfoSections = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.section} ${styles.courses}`}>
        <div className={`${styles.semiSphere} ${styles.coursesSphere}`}>
          <div className={styles.icon}><FaAmericanSignLanguageInterpreting />          </div>
        </div>
        <h2>Courses</h2>
        <p>M.S. OFFICE, TALLY, PROGRAMMING Courses, JAVA</p>
      </div>
      <div className={`${styles.section} ${styles.books}`}>
        <div className={`${styles.semiSphere} ${styles.booksSphere}`}>
          <div className={styles.icon}><FaBook />          </div>
        </div>
        <h2>Books and library</h2>
        <p>A collection of books, and possibly other materials and media, that is accessible for use by its members and members of institutions.</p>
      </div>
      <div className={`${styles.section} ${styles.teachers}`}>
        <div className={`${styles.semiSphere} ${styles.teachersSphere}`}>
          <div className={styles.icon}>  <FaChalkboardTeacher />  </div>
        </div>
        <h2>Teachers</h2>
        <p>Professional knowledge and skill gained through formal preparation and experience.</p>
      </div>
      <div className={`${styles.section} ${styles.certification}`}>
        <div className={`${styles.semiSphere} ${styles.certificationSphere}`}>
          <div className={styles.icon}><FaUserGraduate /> </div>
        </div>
        <h2>Certification</h2>
        <p>Awarded by accredited institutions, such as boards, associations, or professional organizations.</p>
      </div>
    </div>
  );
};

export default InfoSections;
