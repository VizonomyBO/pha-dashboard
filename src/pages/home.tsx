import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Map } from '../components/map/Map';
import { useCategoriesDispatch, useGeocoderDispatch, useGeocoderState } from '../store/hooks';
import { ListMarkerComponent } from '../components/home/ListMarkerComponent';
import { ModalFilters } from '../components/ModalFilters';
import { ListMarkerComponentMobil } from '../components/home/ListMarkerComponetMobile';
import { DropdownGeocoderMobile } from '../components/DropdownGeocoderMobile';
import { useHome } from '../store/hooks/custom/useHome';
import { FeedbackForm } from '../components/FeedbackForm';
import { ModalRequestForm } from '../components/ModalRequestForm';
import { DRAG_MINIMUM_DISTANCE } from '../constants/home';
import { Timeline } from '../components/timeline/Timeline';
import { useWindowSize } from '../store/hooks/custom/useWindowSize';

export const Home = () => {
  const [yStart, setYStart] = useState(0);
  const { ref } = useWindowSize();
  const [yMove, setYMove] = useState(0);
  const [openLegend, setOpenLegend] = useState(false);
  const { dataRequest, scrolledToEnd } = useHome();
  const [openModal, setOpenModal] = useState(false);
  const { setMapViewFilter, setCallFilters } = useCategoriesDispatch();
  const { setControllerZoom } = useGeocoderDispatch();
  const { controllerZoom } = useGeocoderState();
  const [openAllRetailer, setOpenAllRetailer] = useState(false);
  const [visibleFeedback, setVisibleFeedback] = useState(false);
  const [currentRetailerId, setCurrentRetailerId] = useState('');
  const retailerClass = classNames({ 'retailerlist-show': openAllRetailer, retailerlist: !openAllRetailer });

  const handleTouchStart = (evt: React.TouchEvent<HTMLDivElement>) => {
    setYStart(evt.touches[0].clientY || 0);
  };

  const handleTouchMove = (evt: React.TouchEvent<HTMLDivElement>) => {
    const yMoveLocal = evt.touches[0].clientY || 0;
    setYMove(yMoveLocal);
    const yDiff = yStart - yMoveLocal;
    if (Math.abs(yDiff) > DRAG_MINIMUM_DISTANCE) {
      setOpenAllRetailer(yDiff > 0);
    }
  };

  const handleTouchEnd = () => {
    const yDiff = yStart - yMove;
    if (Math.abs(yDiff) > DRAG_MINIMUM_DISTANCE) {
      setOpenAllRetailer(yDiff > 0);
    }
  };

  const onClickChange = (e: string) => {
    const adder = e === 'in' ? 0.5 : -0.5;
    setControllerZoom({
      value: controllerZoom.value + adder,
      type: e
    });
  };
  // set Call Filters on init page in order to call queries, just run on init home
  useEffect(() => {
    setCallFilters(true);
  }, [setCallFilters]);

  const changeFilterMapView = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMapViewFilter(e.currentTarget.checked);
    if (!e.currentTarget.checked) {
      setCallFilters(!e.currentTarget.checked);
    }
  };

  const getTotalNumber = () => {
    if (dataRequest.length > 0) {
      return dataRequest[0].total;
    }
    return 0;
  };

  return (
    <div className="container constainer-mobile">
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
      <div className="pagecontainer" ref={ref}>
        <Navbar />
        <Header type="home" setOpenModal={setOpenModal} />
        <div className="location">
          <div className="locfound">
            <div className="description">
              <div className="desc1">
                { getTotalNumber() }
                &nbsp; Locations Found
              </div>
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
                    <input
                      type="checkbox"
                      onChange={changeFilterMapView}
                    />
                    <span className="checkmark ckeckmark-form" />
                  </label>
                </div>
              </div>
            </div>
            <div className="space">
              <span className="line" />
            </div>
            <div className="listloc">
              <div className="listingarea" onScroll={scrolledToEnd}>
                {dataRequest && ListMarkerComponent(dataRequest)}
              </div>
            </div>
          </div>
          <div className="amap">
            <Map setVisibleFeedback={setVisibleFeedback} setCurrentRetailerId={setCurrentRetailerId} />
            <div className="controlzoom">
              <div className="zplus">
                <button
                  className="light"
                  type="button"
                  id="zoomIn"
                  aria-label="Zoom in"
                  onClick={() => onClickChange('in')}
                >
                  <span className="iczplus" />
                </button>
              </div>
              <div className="space">
                <div className="line" />
              </div>
              <div className="zminus">
                <button
                  className="light"
                  type="button"
                  id="zoomOut"
                  aria-label="Zoom out"
                  onClick={() => onClickChange('out')}
                >
                  <span className="iczminus" />
                </button>
              </div>
            </div>
            <div className={classNames('legendmap', { invisiblelegend: !openLegend })}>
              <div className="legend">
                <div className="iconverified" />
                Verified Retailer
              </div>
              <div className="legend">
                <div className="iconunverified" />
                Unverified Retailer
              </div>
              <div className="legend">
                <div className="icouperstart" />
                Superstar Retailer
              </div>
            </div>
            <div className="legendmapmobile">
              <div
                className={classNames({ unselected: !openLegend, selected: openLegend })}
                onClick={() => setOpenLegend(!openLegend)}
                aria-hidden="true"
              />
            </div>
            <button
              type="button"
              className="supermarketfilter"
              onClick={() => (setOpenModal(true))}
            >
              Filters & Layers
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
              onTouchEnd={handleTouchEnd}
            >
              <div className="tab">
                <div className="space">
                  <div className="line" />
                </div>
                <div className="title">All Retailers</div>
              </div>
              {openAllRetailer && (
                <div className="listpanel">
                  <div className="listingarea">{dataRequest && ListMarkerComponentMobil(dataRequest)}</div>
                </div>
              )}
            </div>
            <Timeline />
          </div>
        </div>
        {openModal && <ModalFilters setOpenModal={setOpenModal} />}
      </div>
      {visibleFeedback && <FeedbackForm setVisible={setVisibleFeedback} retailerId={currentRetailerId} />}
      <ModalRequestForm />
    </div>
  );
};
