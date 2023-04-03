import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

const ProfileButton = ({ user }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
    console.log("open menu")
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
      console.log("close menu")
    };

    document.addEventListener('click', closeMenu);
  
    return () => {
      document.removeEventListener('click', closeMenu)
      console.log("remove event listener")
    };
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button onClick={openMenu}>
        <i className="fa-solid fa-user"/>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.emailAddress}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}


export default ProfileButton;