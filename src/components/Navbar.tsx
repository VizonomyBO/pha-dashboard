export const Navbar = () => {
  console.log('Navbar');
  return (
    <div className="navbararea">
      <div className="navbar">
        <div className="nbleft">
          <div className="iclogo" />
        </div>
        <div className="nbright">
          <div className="sn">
            <button className="light" type="button">
              <span className="ictw" />
            </button>
            <button className="light" type="button">
              <span className="icfb" />
            </button>
            <button className="light" type="button">
              <span className="icyt" />
            </button>
            <button className="light" type="button">
              <span className="icig" />
            </button>
            <button className="light" type="button">
              <span className="icli" />
            </button>
          </div>
          <div className="navigation">
            <nav className="menu">
              <ol>
                <li><a href="#0">About Us</a></li>
                <li className="options">
                  <a href="#0">Work & Impact</a>
                  <ol className="submenu">
                    <li><a href="#0">Option 1</a></li>
                    <li><a href="#0">Option 2</a></li>
                  </ol>
                </li>
                <li className="options hlight">
                  <a href="#0">Blog & Resources</a>
                  <ol className="submenu">
                    <li><a href="#0">Option 1</a></li>
                    <li><a href="#0">Option 2</a></li>
                    <li><a href="#0">Option 2</a></li>
                    <li><a href="#0">Option 2</a></li>
                    <li><a href="#0">Option 2</a></li>
                  </ol>
                </li>
              </ol>
            </nav>
            <div className="donate">
              <button className="light" type="button">Donate</button>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" name="search" />
              <button type="submit">
                <i className="icsearch" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
