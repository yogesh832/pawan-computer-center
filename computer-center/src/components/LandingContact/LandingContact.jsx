import style from "../LandingContact/LandingContact.module.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const LandingContact=()=>{




    return(
        <>
        <div className={style.contact}>
            <h1>Contact:</h1>
            <div className="mail">
            <MdOutlineEmail />
                <div className="mailContent">
                    <h5>Mail Us</h5>
                    lskdfjlsdkj@gmail.com
                </div>
            </div>
            
            <div className="call">
            <IoCall />
                <div className="callContent">
                    <h5>Call Us</h5>
                    +91 9999999999
    </div>
            </div>

            <div className={style.socialIcons}>
                <div className={style.icon}><a href=""><FaFacebookF />      </a></div>
                <div className={style.icon}><a href=""><FaInstagram />    </a></div>
                <div className={style.icon}><a href=""><FaLinkedinIn /></a></div>
                <div className={style.icon}><a href=""><FaTelegram />        </a></div>
                <div className={style.icon}><a href=""><FaTwitter /></a></div>
                <div className={style.icon}><a href=""><IoLogoYoutube /></a></div>
            </div>
        </div>
        </>
    )
}
export default LandingContact;