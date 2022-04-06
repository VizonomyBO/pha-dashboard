import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Map } from '../components/map/Map';
import { ListMarkerComponent } from '../components/home/ListMarkerComponent';
import { DataPhaDasboardMap } from '../@types';
import { webRequest } from '../utils/webRequest';
import { ENDPOINTS } from '../constants/url';

export const Home = () => {
  const [dataRequest, setDataRequest] = useState<Array<DataPhaDasboardMap>>([]);

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
      <div className="barblue home" />
      <div className="pagecontainer">
        <Navbar />
        <Header
          type="home"
        />
        <div className="location">
          <div className="locfound">
            <div className="description">
              <div className="desc1">50 Locations Found</div>
              <div className="desc2">
                Don’t see a food pantry or retailer? We can help!
                Submit a request form, and we’ll add the location.
              </div>
              <Link to="/form" style={{ textDecoration: 'none' }}>
                <div className="textAdd">Add A Listing</div>
              </Link>
            </div>
            <div className="space"><span className="line" /></div>
            <div className="listloc">
              <div className="listingarea">
                {dataRequest && ListMarkerComponent(dataRequest)}
              </div>
            </div>
          </div>
          <div className="amap">
            <Map dataMarker={dataRequest} />
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
          </div>
        </div>
        <div className="modalretailer close">
          <div className="panel">
            <div className="head">
              <label>Choose the categories that most accurately describes the retailer.</label>
            </div>
            <div className="body">
              <div className="card">
                <div className="tcatecory">
                  <label>Select Category</label>
                </div>
                <div className="group">
                  <div className="option">
                    <label className="chkwrap">
                      Supermarket/big box retailer
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="option">
                    <label className="chkwrap">
                      Corner/convenience store
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="option">
                    <label className="chkwrap">
                      Dollar stores
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="option">
                    <label className="chkwrap">
                      Food pantry
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="option">
                    <label className="chkwrap">
                      Distribution location
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="option">
                    <label className="chkwrap">
                      Food co-op
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="tcatecory">
                  <label>Select Accessibility</label>
                </div>
                <div className="group">
                  <div className="option">
                    <label className="chkwrap">
                      WIC Accepted
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="option">
                    <label className="chkwrap">
                      SNAP Accepted
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="tcatecory">
                  <label>Select Data Sources</label>
                </div>
                <div className="group">
                  <div className="option">
                    <label className="chkwrap">
                      Submitted By Users
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="option">
                    <label className="chkwrap">
                      OpenStreetMap
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="option">
                    <label className="chkwrap">
                      USDA Food Markets
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
