
import style from "./Nav.module.css";
import logo from "../assets/Images/logo.png";
const Nav=()=>{ 

const showList={
  
}
    return  <>
<nav className={` ${style.navigation} navbar navbar-expand-lg bg-body-tertiary`}>
  <div className={`${style.mainContainer} container-fluid `}>
    <img className={style.logo} src={logo} alt="" />
 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" 
      // onClick={{showList}}
      ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav active">
        <li className="nav-item">
          <a className="nav-link "  href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Our Service</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link " href="#">Certification</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Contact Us</a>
        </li>  
       
     
      </ul>
    </div>
  </div>
  <div className={style.buttons}>
  <button type="button" className={`${style.button1} btn btn-danger`}> Register Now</button>
        <button type="button" className={`${style.button2} btn btn-danger`}> Student SignUp</button>
        </div>
        <div className={style.resButtons}>
        <button type="button" className={`${style.resButton1} btn btn-danger`}>SignIn</button>
        <button type="button" className={`${style.resButton2} btn btn-danger`}>SignUp</button>
        </div>
</nav>

      </>
    
  }
  
  export default Nav;
  