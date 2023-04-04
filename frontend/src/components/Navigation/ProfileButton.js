import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';


const ProfileButton = ({ user }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if(dropdownRef.current.contains(e.target)) return
      setShowMenu(false);
    };

    document.addEventListener('mousedown', closeMenu);
  
    return () => {
      document.removeEventListener('mousedown', closeMenu)
    };
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div ref={dropdownRef}>
      <button className="profile-icon" onClick={openMenu}>
      <i className="fa-regular fa-user fa-xl"></i>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <p>Hello, {user.firstName}!</p>
          <a href={`/users/${user.id}`}><li>My Profile</li></a>
          <li>
            <h2 className="signout-btn" onClick={logout}>Sign Out</h2>
          </li>
        </ul>
      )}
    </div>
  );
}


export default ProfileButton;