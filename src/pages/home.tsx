import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Map } from '../components/map/Map';
import { ListMarkerComponent } from '../components/home/ListMarkerComponent';
import { DataPhaDasboardMap } from '../@types';
import { webRequest } from '../utils/webRequest';
import { ENDPOINTS } from '../constants/url';
import { ModalFilters } from '../components/ModalFilters';
import { ListMarkerComponentMobil } from '../components/home/ListMarkerComponetMobile';
import { DropdownGeocoderMobile } from '../components/DropdownGeocoderMobile';

export const Home = () => {
  const [dataRequest, setDataRequest] = useState<Array<DataPhaDasboardMap>>([]);
  const [openModal, setOpenModal] = useState(false);
  const [openAllRetailer, setOpenAllRetailer] = useState(false);
  const retailerClass = classNames({ 'retailerlist-show': openAllRetailer, retailerlist: !openAllRetailer });
  let xDown:number | null = null;
  let yDown:number | null = null;
  const handleTouchStart = (evt: React.TouchEvent<HTMLDivElement>) => {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
  };

  const handleTouchMove = (evt: React.TouchEvent<HTMLDivElement>) => {
    if (!xDown || !yDown) {
      return;
    }
    const yUp = evt.touches[0].clientY;
    const yDiff = yDown - yUp;
    if (yDiff > 0) {
      setOpenAllRetailer(true);
    } else {
      setOpenAllRetailer(false);
    }
    xDown = null;
    yDown = null;
  };
  useEffect(() => {
    webRequest.get(ENDPOINTS.MAP()).then((res) => res.json())
      .then((res) => {
        const dataRows: Array<DataPhaDasboardMap> = [];
        res.data.rows.forEach((element: DataPhaDasboardMap) => {
          if (element.geom) {
            dataRows.push(element);
          }
        });
        setDataRequest(dataRows);
      }).catch((err) => console.error(err));
  }, []);

  const onClickPlus = () => {
    /* this.props.onControlClick!(this.props.map, this.props.zoomDiff!); */
  };

  return (
    <div className="container">
      <div className="bgwhite" />
      <figure className="bgnoise home" />
      <div className="barblue home" id="barblue" />
      <header className="topmenu">
        <div className="spanel">
          <div className="logoarea">
            <div className="iclogo" />
          </div>
          <DropdownGeocoderMobile />
        </div>
      </header>
      <div className="pagecontainer">
        <Navbar />
        <Header type="home" setOpenModal={setOpenModal} />
        <div className="location">
          <div className="locfound">
            <div className="description">
              <div className="desc1">50 Locations Found</div>
              <div className="desc2">
                Don’t see a food pantry or retailer? We can help! Submit a request form, and we’ll add the location.
              </div>
              <div className="optaddchk">
                <Link to="/form" style={{ textDecoration: 'none' }}>
                  <div className="textAdd">Add A Listing</div>
                </Link>
                <div className="option">
                  <label className="chkwrap">
                    Filter by map view
                    <input type="checkbox" />
                    <span className="checkmark ckeckmark-form" />
                  </label>
                </div>
              </div>
            </div>
            <div className="space">
              <span className="line" />
            </div>
            <div className="listloc">
              <div className="listingarea">{dataRequest && ListMarkerComponent(dataRequest)}</div>
            </div>
          </div>
          <div className="amap">
            <Map />
            <div className="controlzoom">
              <div className="zplus">
                <button className="light" type="button" id="zoomIn" aria-label="Zoom in" onClick={onClickPlus}>
                  <span className="iczplus" />
                </button>
              </div>
              <div className="space">
                <div className="line" />
              </div>
              <div className="zminus">
                <button className="light" type="button">
                  <span className="iczminus" />
                </button>
              </div>
            </div>
            <button
              type="button"
              className="supermarketfilter"
              onClick={() => (setOpenModal(true))}
            >
              Supermarket/super...
              <KeyboardArrowDownIcon style={{ marginLeft: '8px', marginBottom: '-5px' }} />
            </button>
            <Link to="/form">
              <button
                type="button"
                className="addlistening"
              >
                Add A Listing
              </button>
            </Link>
            <div
              className={retailerClass}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              <div className="tab">
                <div className="space">
                  <div className="line" />
                </div>
                <div className="title">All Retailer</div>
              </div>
              {openAllRetailer && (
                <div className="listpanel">
                  <div className="listingarea">{dataRequest && ListMarkerComponentMobil(dataRequest)}</div>
                </div>
              )}
            </div>
            <div
              className={retailerClass}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              <div className="tab">
                <div className="space">
                  <div className="line" />
                </div>
                <div className="title">All Retailer</div>
              </div>
              {openAllRetailer && (
                <div className="listpanel">
                  <div className="listingarea">{dataRequest && ListMarkerComponentMobil(dataRequest)}</div>
                </div>
              )}
            </div>
          </div>
        </div>
        {openModal && <ModalFilters setOpenModal={setOpenModal} />}
      </div>
    </div>
  );
};
