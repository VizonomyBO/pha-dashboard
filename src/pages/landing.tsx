import { Link } from 'react-router-dom';
import { DropdownCategories } from '../components/DropdownCategories';
import { DropdownGeocoder } from '../components/DropdownGeocoder';

export const Landing = () => {
  console.log('Landing');
  return (
    <div className="container">
      <div className="bg" />
      <div className="pagecontainer">
        <div className="navbararea" style={{ backgroundColor: 'transparent' }}>
          <div className="navbar">
            <div className="nbleft">
              <a href="https://www.ahealthieramerica.org/" target="_blank" rel="noopener noreferrer">
                <div className="iclogowhite" />
              </a>
            </div>
            <div className="nbright">
              <div className="sn">
                <Link to="/form" style={{ textDecoration: 'none' }}>
                  <div className="txtaction">Add A Listing</div>
                </Link>
                <a href="https://twitter.com/PHAnews" target="_blank" rel="noopener noreferrer">
                  <button className="light" type="button">
                    <span className="ictww" />
                  </button>
                </a>
                <a href="https://www.facebook.com/PHA" target="_blank" rel="noopener noreferrer">
                  <button className="light" type="button">
                    <span className="icfbw" />
                  </button>
                </a>
                <a href="https://www.youtube.com/user/aHealthierAmerica" target="_blank" rel="noopener noreferrer">
                  <button className="light" type="button">
                    <span className="icytw" />
                  </button>
                </a>
                <a href="https://www.instagram.com/PHAnews" target="_blank" rel="noopener noreferrer">
                  <button className="light" type="button">
                    <span className="icigw" />
                  </button>
                </a>
                <a
                  href="https://www.linkedin.com/company/partnership-for-a-healthier-america/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="light" type="button">
                    <span className="icliw" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ldgaccesspoint">
          <h1>GOOD FOOD MAP</h1>
          <p>Search over +200 curated restaurants, farms, markets and other fresh source of local, sustainable food.</p>
        </div>
        <div className="ldgsearchstore">
          <div className="alook">
            <DropdownGeocoder type="landing" />
            <div className="space" />
            <DropdownCategories />
          </div>
        </div>
      </div>
    </div>
  );
};
