import React from 'react';
import styles from './ControlPanel.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const panels = [
  { count: 2, label: 'User', colorClass: 'blue' },
  { count: 0, label: 'Staff', colorClass: 'cyan' },
  { count: 187, label: 'Student', colorClass: 'pink' },
  { count: 157, label: 'Courses', colorClass: 'blue' },
  { count: 202, label: 'Subject', colorClass: 'orange' },
  { count: 1, label: 'Syllabus', colorClass: 'cyan' },
  { count: 1, label: 'Video Classes', colorClass: 'purple' },
  { count: 26, label: 'Marksheet', colorClass: 'red' },
  { count: 1, label: 'Study Materials', colorClass: 'cyan' },
];

const ControlPanel = () => {
  return (
    <div className={styles.controlPanel}>
      {panels.map((panel, index) => (
        <div key={index} className={`${styles.panel} ${styles[panel.colorClass]}`}>
          <div className={styles.panelHeader}>
            <div className={styles.panelCount}>{panel.count}</div>
            <div className={styles.panelIcon}><i className="fas fa-chart-bar"></i></div>
          </div>
          <div className={styles.panelLabel}>{panel.label}</div>
          <div className={styles.moreInfo}>
            More info <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ControlPanel;
