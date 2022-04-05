export const Navbar = () => {
  console.log('Navbar');
  return (
    <div className="navbararea">
      <div className="navbar">
        <div className="nbleft">
          <a href="https://www.ahealthieramerica.org/">
            <div className="iclogo" />
          </a>
        </div>
        <div className="nbright">
          <div className="sn">
            <a href="https://twitter.com/PHAnews">
              <button className="light" type="button">
                <span className="ictw" />
              </button>
            </a>
            <a href="https://www.facebook.com/PHA">
              <button className="light" type="button">
                <span className="icfb" />
              </button>
            </a>
            <a href="https://www.youtube.com/user/aHealthierAmerica">
              <button className="light" type="button">
                <span className="icyt" />
              </button>
            </a>
            <a href="https://www.instagram.com/PHAnews">
              <button className="light" type="button">
                <span className="icig" />
              </button>
            </a>
            <a href="https://www.linkedin.com/company/partnership-for-a-healthier-america/">
              <button className="light" type="button">
                <span className="icli" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
