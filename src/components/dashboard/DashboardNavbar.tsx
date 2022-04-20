import classNames from 'classnames';
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react';
import { useNavigate } from 'react-router-dom';
import { QueryParams } from '../../@types';
import { authorizationManager } from '../../utils/authorizationManager';

export const DashboardNavbar = ({ setParams }: { setParams: Dispatch<SetStateAction<QueryParams>>}) => {
  const [showLogout, setShowLogout] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isRetailer, setIsRetailer] = useState(true);
  const profileRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const logout = () => {
    authorizationManager.logout();
    navigate('/home');
  };

  useEffect(() => {
    setParams((old) => ({ ...old, isRetailer }));
  }, [isRetailer, setParams]);

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

  const individualActive = classNames({ active: !isRetailer });
  const retailerActive = classNames({ active: isRetailer });

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
                <li className={individualActive}>
                  <span role="button" tabIndex={0} onClick={() => setIsRetailer(false)}>
                    Individual Forms
                  </span>
                </li>
                <li className={retailerActive}>
                  <span role="button" tabIndex={0} onClick={() => setIsRetailer(true)}>
                    Retailer Forms
                  </span>
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
