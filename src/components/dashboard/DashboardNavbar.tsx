import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authorizationManager } from '../../utils/authorizationManager';

export const DashboardNavbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const profileRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const logout = () => {
    authorizationManager.logout();
    navigate('/home');
  };

  useEffect(() => {
    const mouseOverEvent = () => {
      setShowLogout(true);
    };
    const mouseLeaveEvent = () => {
      setTimeout(() => {
        setShowLogout(false);
      }, 1000);
    };
    const element = profileRef.current;
    element?.addEventListener('mouseover', mouseOverEvent);
    element?.addEventListener('mouseleave', mouseLeaveEvent);
    return () => {
      element?.removeEventListener('mouseover', mouseOverEvent);
      element?.removeEventListener('mouseleave', mouseLeaveEvent);
    };
  }, []);

  return (
    <div className="navbararea">
      <div className="navbar">
        <div className="nbleft">
          <div className="iclogo" />
        </div>
        <div className="nbright">
          <div className="navigationadmin">
            <nav className="menu">
              <ol>
                <li><a href="#0">Individual Forms</a></li>
                <li className="active">
                  <a href="#0">Retailer Forms</a>
                </li>
              </ol>
            </nav>
            <div className="userarea">
              <div className="profile dropdown">
                <button className="light" type="button">
                  <figure ref={profileRef} className="picture">
                    <img src="/images/profile.png" alt="" />
                  </figure>
                </button>
                {(showLogout || isHovered) && (
                <div
                  className="dropdown-content logout"
                  onFocus={() => {
                    console.debug('onFocus profile');
                  }}
                  onMouseOver={() => {
                    setIsHovered(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                  }}
                >
                  <button className="light" type="button" onClick={() => logout()}>
                    Logout
                  </button>
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
