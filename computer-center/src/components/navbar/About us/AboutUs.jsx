// src/components/OurStory.jsx
import React from 'react';
import style from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <>
    <h1 className={style.head1}>About Us</h1>

    <div className={style.container1}>
      <h2 className={style.head2}>Our Story</h2>
      <p className={style.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget
        leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis
        vitae at risus.
      </p>
      <p className={style.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget
        leo at velit imperdiet varius. 
      </p>
    </div>

<br />

    <div className={style.container2}>

      <div className={style.left}>
      <h2 className={style.head2}>Our Misson</h2>
      <p className={style.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget
        leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis
        vitae at risus.
      </p>
      </div>

      <div className={style.right}>
      <h2 className={style.head2}>Our Vision</h2>
      <p className={style.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget
        leo at velit imperdiet varius. 
      </p>
    </div>
    </div>


    
    </>
  );
};


export default AboutUs ;
