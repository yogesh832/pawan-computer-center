import React from 'react';
import style from '../Marque/Marque.module.css';   

function Marquee() {
  return (
    <div className={style.marqueeContainer}>
      <p className={style.marqueeText}>निवेदन इस प्रकार है कि लघु जल विद्युत परियोजना गोला समूह 100 किलो वाट जो 07 किमी के लिए गोला नदी से सम्बन्धित है उसके निर्माण के लिये उरेड़ा द्वारा निर्गत पत्रांक सं. 07/UREDA/BGR/TOLI/MIH/2023 दिनांक 02 जून 2024 के सम्बन्ध में प्रमाण पत्र देना है। अतः महोदय से निवेदन है कि उक्त विषय के संदर्भ में सहयोग प्रदान करने की कृपा करें।This is a continuously moving paragraph! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, ducimus. Rerum porro, nisi animi blanditiis dolorem corrupti dolores quis qui non corporis dicta error odit ducimus at atque mollitia optio? This is a continuously moving paragraph! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, ducimus. Rerum porro, nisi animi blanditiis dolorem corrupti dolores quis qui non corporis dicta error odit ducimus at atque mollitia optio?</p>
    </div>
  );
}

export default Marquee;
