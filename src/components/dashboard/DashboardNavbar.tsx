import { useNavigate } from 'react-router-dom';
import { authorizationManager } from '../../utils/authorizationManager';

export const DashboardNavbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    authorizationManager.logout();
    navigate('/home');
  };

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
                <li><a href="#0">Individual</a></li>
                <li className="active">
                  <a href="#0">Dashboard</a>
                </li>
              </ol>
            </nav>
            <div className="userarea">
              <div className="profile">
                <button className="light" type="button">
                  <figure className="picture">
                    <img src="/images/img_user.png" alt="" />
                  </figure>
                </button>
                <div className="logout">
                  <button className="light" type="button" onClick={() => logout()}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
