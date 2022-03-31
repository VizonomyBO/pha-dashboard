import { DropdownCategories } from '../components/DropdownCategories';

export const Landing = () => {
  console.log('Landing');
  return (
    <div className="container">
      <div className="bg" />
      <div className="pagecontainer">
        <div className="navbar">
          <div className="nbleft">
            <div className="iclogowhite" />
          </div>
          <div className="nbright">
            <div className="sn">
              <div className="txtaction">Add A Listing</div>
              <button className="light" type="button">
                <span className="ictww" />
              </button>
              <button className="light" type="button">
                <span className="icfbw" />
              </button>
              <button className="light" type="button">
                <span className="icytw" />
              </button>
              <button className="light" type="button">
                <span className="icigw" />
              </button>
              <button className="light" type="button">
                <span className="icliw" />
              </button>
            </div>
          </div>
        </div>
        <div className="ldgaccesspoint">
          <h1>FOOD ACCESS POINTS NEAR YOU</h1>
          <p>Search over +200 curated restaurants, farms, markets and other fresh source of local, sustainable food.</p>
        </div>
        <div className="ldgsearchstore">
          <div className="alook">
            <div className="swhere">
              <span className="icmappin" />
              <span className="txtd">Where</span>
              <input type="text" name="" id="" placeholder="City or Zip Code" />
              <span className="iccrosshair" />
            </div>
            <div className="space" />
            <DropdownCategories />
          </div>
        </div>
      </div>
    </div>
  );
};
