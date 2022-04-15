export const Navbar = () => (
  <div className="navbararea">
    <div className="navbar">
      <div className="nbleft">
        <a
          href="https://www.ahealthieramerica.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="iclogo" />
        </a>
      </div>
      <div className="nbright">
        <div className="sn">
          <a
            href="https://twitter.com/PHAnews"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="light" type="button">
              <span className="ictw" />
            </button>
          </a>
          <a
            href="https://www.facebook.com/PHA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="light" type="button">
              <span className="icfb" />
            </button>
          </a>
          <a
            href="https://www.youtube.com/user/aHealthierAmerica"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="light" type="button">
              <span className="icyt" />
            </button>
          </a>
          <a
            href="https://www.instagram.com/PHAnews"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="light" type="button">
              <span className="icig" />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/company/partnership-for-a-healthier-america/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="light" type="button">
              <span className="icli" />
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
);
