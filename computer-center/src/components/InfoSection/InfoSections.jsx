import React from 'react';
import { FaAmericanSignLanguageInterpreting, FaBook, FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';
import styles from './InfoSections.module.css';

const InfoSections = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.section} ${styles.courses}`}>
        <div className={`${styles.semiSphere} ${styles.coursesSphere}`}>
          <div className={styles.icon}><FaAmericanSignLanguageInterpreting /></div>
        </div>
        <h2>Courses</h2>
        <p>M.S. OFFICE, TALLY, PROGRAMMING Courses, JAVA</p>
      </div>
      <div className={`${styles.section} ${styles.books}`}>
        <div className={`${styles.semiSphere} ${styles.booksSphere}`}>
          <div className={styles.icon}><FaBook /></div>
        </div>
        <h2>Books and Library</h2>
        <p>A collection of books and other materials accessible for use.</p>
      </div>
      <div className={`${styles.section} ${styles.teachers}`}>
        <div className={`${styles.semiSphere} ${styles.teachersSphere}`}>
          <div className={styles.icon}><FaChalkboardTeacher /></div>
        </div>
        <h2>Teachers</h2>
        <p>Professional knowledge and skill gained through formal preparation and experience.</p>
      </div>
      <div className={`${styles.section} ${styles.certification}`}>
        <div className={`${styles.semiSphere} ${styles.certificationSphere}`}>
          <div className={styles.icon}><FaUserGraduate /></div>
        </div>
        <h2>Certification</h2>
        <p>Awarded by accredited institutions.</p>
      </div>
    </div>
  );
};

export default InfoSections;
