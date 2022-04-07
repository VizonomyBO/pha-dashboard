import { useNavigate } from 'react-router-dom';

export const DashboardNavbar = () => {
  const TOKEN_KEY = 'token';
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
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
                <li>
                  <a href="#0">Projects</a>
                </li>
                <li>
                  <a href="#0">Tasks</a>
                </li>
                <li>
                  <a href="#0">Reporting</a>
                </li>
                <li>
                  <a href="#0">Users</a>
                </li>
              </ol>
            </nav>
            <div className="userarea">
              <button type="button" className="light">
                <span className="icsetting" />
              </button>
              <button className="light" type="button">
                <span className="icbell" />
              </button>
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
