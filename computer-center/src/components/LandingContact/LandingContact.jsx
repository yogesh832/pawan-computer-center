import style from "../LandingContact/LandingContact.module.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const LandingContact=()=>{
 



    return(
        <>
        <div className={style.contact}>
<p className={style.welcome}>Welcome To Pawan Computer Center 🖥️</p>
          
                
    <div className={style.smallContainer}>
    <div className={style.mail}>
                    <p className={style.mainIcon}><MdOutlineEmail /></p>
                <div className={style.mailContent}>
                    
                    <p className={style.detail}> lskdfjlsdkj@gmail.com</p>
                </div>
        </div>

            <div className={style.call}>
             <p className={style.mainIcon}><IoCallOutline /></p>
                <div className={style.callContent}>
                   
                    <p className={style.detail}> +91 99999999 </p>
                    </div> 
            </div>


    </div>

            <div className={style.socialIcons}>
                <div className={style.icon}><a href=""><FaFacebookF /></a></div>
                <div className={style.icon}><a href=""><FaInstagram /></a></div>
                <div className={style.icon}><a href=""><FaLinkedinIn /></a></div>
                <div className={style.icon}><a href=""><FaTelegram /></a></div>
                <div className={style.icon}><a href=""><FaTwitter /></a></div>
                <div className={style.icon}><a href=""><IoLogoYoutube /></a></div>
            </div>
        </div>
        </>
    )
}

export default LandingContact;

