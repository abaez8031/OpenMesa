import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import openMesaLogo from "../../assets/pngwing.com.png"
import githubLogo from "../../assets/icons8-github-50.png"
import linkedinLogo from "../../assets/icons8-linkedin-64.png"


const  Navigation = () => {
  const sessionUser = useSelector(state => state.session.user);
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <li><SignupFormModal/></li>
        <li><LoginFormModal/></li>
        
      </>
    );
  }

  return (
    <ul className='nav-bar'>
      <NavLink exact to="/" className="openmesa-nav-link"> <img className='openmesa-logo' src={openMesaLogo}></img> <span className="openmesa-text">OpenMesa</span></NavLink>

      <div className='about-me-links'>
        <a target="_blank" href="https://github.com/abaez8031/OpenMesa"><img className="github-logo" src={githubLogo}/></a>
        <a target="_blank" href="https://www.linkedin.com/in/ariel-baez-36853b26a/"><img className="linkedin-logo" src={linkedinLogo}/></a>
      </div>
        {sessionLinks}
    </ul>
  );
}

export default Navigation;