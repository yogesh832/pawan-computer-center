import React from 'react';
import Row from './Row';
import styles from '../Marketing Tool/MarketingTool.module.css';

const marketingToolsData = [
  {
    number:1,
    type: 'Online',
    image: 'path_to_image1.jpg', 
    description: 'Diploma in Computer Application Course',
    link: 'path_to_download1'
  },
  {
    number: 2,
    type: 'Online',
    image: 'path_to_image2.jpg', 
    description: 'Advance Diploma in Computer Application Course',
    link: 'path_to_download2'
  },
  {
    number: 3,
    type: 'Online',
    image: 'path_to_image2.jpg', 
    description: ' Our Beautician Course',
    link: 'path_to_download2'
  },
  {
    number: 4,
    type: 'Online',
    image: 'path_to_image2.jpg', 
    description: 'Our Yoga Course',
    link: 'path_to_download2'
  },
  {
    number: 5,
    type: 'Online',
    image: 'path_to_image2.jpg', 
    description: 'Our Banner',
    link: 'path_to_download2'
  },
  

];

const MarketingTools = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Sl No.</th>
          <th>Type</th>
          <th>Image</th>
          <th>Description</th>
          <th>Download Link</th>
        </tr>
      </thead>
      <tbody>
        {marketingToolsData.map(tool => (
          <Row key={tool.number} {...tool} />
        ))}
      </tbody>
    </table>
  );
};

export default MarketingTools;
